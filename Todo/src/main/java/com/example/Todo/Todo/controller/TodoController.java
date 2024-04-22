package com.example.Todo.Todo.controller;

import com.example.Todo.Todo.model.Todo;
import com.example.Todo.Todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    @Autowired(required = false)
    TodoRepository todoRepository;

    @GetMapping("/")
    public ResponseEntity<HttpStatus> getToDo() {
        return (ResponseEntity<HttpStatus>) ResponseEntity.status(200);

    }

    @PostMapping("/{todo}")
    public ResponseEntity<Todo>create_status(@PathVariable String todo){
        try {
            Todo _todo =todoRepository
                    .save(new Todo(todo));
            return new ResponseEntity<>(_todo, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateEmployee(@PathVariable long id,@RequestBody Todo status) {
        Todo updatestatus = todoRepository.findById(id)
                .orElseThrow(() -> new Error("Employee not exist with id: " + id));


        updatestatus.setStatus(status.getStatus());


        todoRepository.save(updatestatus);

        return ResponseEntity.ok(updatestatus);
    }

}
