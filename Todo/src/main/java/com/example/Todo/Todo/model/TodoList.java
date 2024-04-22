package com.example.Todo.Todo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "TodoList")
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Todo_item;

    private Long project_id;

    public TodoList(String todo_item, Long project_id) {
        Todo_item = todo_item;
        this.project_id = project_id;
    }

    public TodoList(String todo_item) {
        Todo_item = todo_item;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTodo_item() {
        return Todo_item;
    }

    public void setTodo_item(String todo_item) {
        Todo_item = todo_item;
    }

    public Long getProject_id() {
        return project_id;
    }

    public void setProject_id(Long project_id) {
        this.project_id = project_id;
    }


}
