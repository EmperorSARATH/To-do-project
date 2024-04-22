package com.example.Todo.Todo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Project")
public class Project {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "project_id")
    private Long id;
    private String Title;

    //    @OneToMany(targetEntity = Todo.class,cascade = CascadeType.ALL)
//    @JoinColumn(name="project_fk",referencedColumnName = "project_id")
    @Column(name = "todo_list")
    private List<String> todo_list;

    public List<String> getTodo_list() {
        return todo_list;
    }

    public void setTodo_list(List<String> todo_list) {
        this.todo_list = todo_list;
    }


    public Project(List<String> todo_list) {
        this.todo_list = todo_list;
    }

    public Project(String title) {
        Title = title;
    }

    public Project() {
    }

    public Project(Long id, String title) {
        this.id = id;
        Title = title;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }
}
