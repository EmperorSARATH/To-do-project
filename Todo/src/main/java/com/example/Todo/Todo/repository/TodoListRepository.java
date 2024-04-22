package com.example.Todo.Todo.repository;


import com.example.Todo.Todo.model.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoListRepository extends JpaRepository<TodoList,Long> {
}
