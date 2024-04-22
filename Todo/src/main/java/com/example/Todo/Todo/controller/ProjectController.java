package com.example.Todo.Todo.controller;

import com.example.Todo.Todo.model.Project;
import com.example.Todo.Todo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired(required = false)
    ProjectRepository projectRepository;

    @GetMapping()
    public ResponseEntity getProject() {
        return ResponseEntity.ok(this.projectRepository.findAll());


    }

    @GetMapping("/{id}")
    public ResponseEntity getProjectId(@PathVariable("id") Long id) {
        return ResponseEntity.ok(this.projectRepository.findById(id));


    }
    @PostMapping("/Project/{project_name}")
    public ResponseEntity<Project> create_ProjectTitle(@PathVariable("project_name") String project_name ){
        try {
            Project _project = projectRepository
                    .save(new Project(project_name));
            return new ResponseEntity<>(_project, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/Project/{id}")
    public ResponseEntity<Project> updateEmployee(@PathVariable long id,@RequestBody Project projectdetails) {
        Project updateProject = projectRepository.findById(id)
                .orElseThrow(() -> new Error("Employee not exist with id: " + id));


        updateProject.setTodo_list(projectdetails.getTodo_list());


        projectRepository.save(updateProject);

        return ResponseEntity.ok(updateProject);
    }


}
