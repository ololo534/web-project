package io.pivotal.spring.todos.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import io.pivotal.spring.todos.user.User;

import java.util.List;


@RestController
public class TodoListController {// way for elements todo-list

    @Autowired
    private TodoListRepository repository;

    @Autowired
    private TodoItemRepository itemRepository;

    @PostMapping("/lists") // save our element in db
    public ResponseEntity<TodoListCreatedResponse> create(@RequestBody TodoListRequest todoListRequest,
                                         Authentication authentication) {
        TodoList todoList = repository.save(TodoList.from(todoListRequest, getOwnerFromAuthentication(authentication)));
        return new ResponseEntity<>(TodoListCreatedResponse.from(todoList), HttpStatus.CREATED);
    }

    @PostMapping("/lists/{id}/items") // search and view our elements
    public ResponseEntity<TodoItemCreatedResponse> createItem(@PathVariable("id") Long id, @RequestBody TodoItemRequest todoItemRequest,
                                                              Authentication authentication) {
        TodoList todoList = repository.findOneByIdAndOwner(id, getOwnerFromAuthentication(authentication));
        TodoItem todoItem = itemRepository.save(TodoItem.from(todoItemRequest, todoList));
        return new ResponseEntity<>(TodoItemCreatedResponse.from(todoItem), HttpStatus.CREATED);
    }

    private User getOwnerFromAuthentication(Authentication authentication) {// getting user
    	System.out.println("Auth Details are "+ authentication.getDetails() + "\n" +
    			 "\n Auth Prinicipal" + authentication.getPrincipal()+ "\n" +
    			 "Authorities" + authentication.getAuthorities()); 
        return (User) authentication.getPrincipal();
    }

    @GetMapping("/lists")// view all elements of our user
    public ResponseEntity<Iterable<TodoList>> list(Authentication authentication) {
        List<TodoList> allByOwner = repository.findAllByOwner(getOwnerFromAuthentication(authentication));
        return new ResponseEntity<>(allByOwner, HttpStatus.OK);
    }

    @GetMapping("/lists/{id}")
    public ResponseEntity<TodoList> get(@PathVariable("id") Long id,
                                        Authentication authentication) {
        return new ResponseEntity<>(repository.findOneByIdAndOwner(id, getOwnerFromAuthentication(authentication)), HttpStatus.OK);
    }

    @DeleteMapping("/lists/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id,
                                         Authentication authentication) {
        repository.deleteByIdAndOwner(id, getOwnerFromAuthentication(authentication));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/lists/{id}/items/{itemId}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id,
                                         @PathVariable("itemId") Long itemId,
                                         Authentication authentication) {
        TodoList todoList = repository.findOneByIdAndOwner(id, getOwnerFromAuthentication(authentication));
        itemRepository.deleteByIdAndListAndOwner(itemId, todoList, getOwnerFromAuthentication(authentication));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/lists/{id}")//update element
    public ResponseEntity<String> update(@PathVariable("id") Long id,
                                         @RequestBody TodoListRequest request,
                                         Authentication authentication) {
        TodoList todoList = repository.findOneByIdAndOwner(id, getOwnerFromAuthentication(authentication));
        todoList.merge(request);
        repository.save(todoList);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/lists/{id}/items/{itemId}")
    public ResponseEntity<String> updateItem(@PathVariable("id") Long id,
                                             @PathVariable("itemId") Long itemId,
                                             @RequestBody TodoItemRequest request,
                                             Authentication authentication) {
        
    	TodoList todoList = repository.findOneByIdAndOwner(id, getOwnerFromAuthentication(authentication));
        TodoItem todoItem = itemRepository.findOneByIdAndListAndOwner(itemId, todoList, getOwnerFromAuthentication(authentication));
        
        todoItem.merge(request);
        itemRepository.save(todoItem);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
