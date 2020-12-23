package io.pivotal.spring.todos.auth.service;

import io.pivotal.spring.todos.auth.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}