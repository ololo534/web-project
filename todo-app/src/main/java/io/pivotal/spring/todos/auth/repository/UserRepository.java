package io.pivotal.spring.todos.auth.repository;

import io.pivotal.spring.todos.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}