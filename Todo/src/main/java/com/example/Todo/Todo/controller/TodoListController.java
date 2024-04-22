package com.example.Todo.Todo.controller;

import com.example.Todo.Todo.model.Project;
import com.example.Todo.Todo.model.TodoList;
import com.example.Todo.Todo.repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/todolist")
public class TodoListController {
    @Autowired
    TodoListRepository todoListRepository;

    @PostMapping("/add")
    public ResponseEntity addTodoList(@RequestBody String todo ){
        TodoList _item = todoListRepository
                .save(new TodoList(todo));
        return new ResponseEntity<>(_item, HttpStatus.CREATED);
    }

}
