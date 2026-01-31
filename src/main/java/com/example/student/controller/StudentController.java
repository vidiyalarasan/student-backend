package com.example.student.controller;
import jakarta.validation.Valid;

import com.example.student.model.Student;
import com.example.student.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // Test API
    @GetMapping("/hello")
    public String hello() {
        return "Student API is working!";
    }

    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }


    // Add student
    @PostMapping
    public Student addStudent(@Valid @RequestBody Student student) {
        return studentService.saveStudent(student);
    }
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return "Student deleted successfully";
    }

    // Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

}
