package io.pivotal.spring.todos.auth.repository;

import io.pivotal.spring.todos.auth.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>{
}