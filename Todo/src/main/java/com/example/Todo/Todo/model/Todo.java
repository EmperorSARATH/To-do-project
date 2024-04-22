package com.example.Todo.Todo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Todo")
public class Todo {
    @Id
    @Column(name = "todo_id")
    private Long id;
    //private String Description;
    @Enumerated(EnumType.STRING)
    private Status status;

    public Todo(Status status) {
        this.status = status;
    }

    public Todo(String todo) {
        status = Status.valueOf(todo);
    }


    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Todo() {
    }

//    public Todo(Long id, String description) {
//        this.id = id;
//        Description = description;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public String getDescription() {
//        return Description;
//    }
//
//    public void setDescription(String description) {
//        Description = description;
//    }
}
