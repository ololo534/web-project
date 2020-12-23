package io.pivotal.spring.todos.todolist;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
public class TodoListRequest {

    private String name;
    
    
    public TodoListRequest(String name) {
        this.setName(name);
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
