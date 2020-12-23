package io.pivotal.spring.todos.todolist;

import org.springframework.data.repository.CrudRepository;

import io.pivotal.spring.todos.user.User;

import javax.transaction.Transactional;
import java.util.List;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {// search todo-list from our user in db
    List<TodoList> findAllByOwner(User owner);

    TodoList findOneByIdAndOwner(Long id, User owner);

    @Transactional
    void deleteByIdAndOwner(Long id, User owner);
}
