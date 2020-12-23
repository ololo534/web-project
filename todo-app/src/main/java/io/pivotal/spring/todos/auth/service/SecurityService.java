package io.pivotal.spring.todos.auth.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}