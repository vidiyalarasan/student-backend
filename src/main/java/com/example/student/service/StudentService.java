package com.example.student.service;

import com.example.student.exception.StudentNotFoundException;
import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // CREATE
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    // READ ALL
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // READ BY ID (with exception)
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    // UPDATE
    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));

        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());
        student.setAge(updatedStudent.getAge());

        return studentRepository.save(student);
    }

    // DELETE (with check)
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
    }
}
