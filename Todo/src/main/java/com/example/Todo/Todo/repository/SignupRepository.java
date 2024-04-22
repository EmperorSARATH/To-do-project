package com.example.Todo.Todo.repository;

import com.example.Todo.Todo.model.Signup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<Signup,Long> {
}
