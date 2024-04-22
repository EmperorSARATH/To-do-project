package com.example.Todo.Todo.controller;

import com.example.Todo.Todo.model.Signup;
import com.example.Todo.Todo.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class SignupController {
    @Autowired
    SignupRepository signupRepository;

    @PostMapping("/signup")
    public ResponseEntity CreateUser(@RequestBody Signup signup){
        try {
            Signup _signup = signupRepository
                    .save(signup);
            return new ResponseEntity<>(_signup, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @PostMapping("/login")
    public ResponseEntity userlogin(@RequestBody Signup username){
        List<Signup> users = signupRepository.findAll();
        for (Signup other : users) {
            String name=other.getUsername();
            String pass= other.getPassword();
            if (name.equals(username.getUsername()) && pass.equals(username.getPassword())) {
                return ResponseEntity.ok(users);
            }
        }
        return ResponseEntity.notFound().build();
    }

}
