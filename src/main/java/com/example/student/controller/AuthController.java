package com.example.student.controller;

import com.example.student.model.AppUser;
import com.example.student.repository.UserRepository;
import com.example.student.security.JwtUtil;
import org.jspecify.annotations.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository repo,
                          PasswordEncoder encoder,
                          JwtUtil jwtUtil) {
        this.repo = repo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public void register(@RequestBody @NonNull AppUser user) {
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody @NonNull AppUser user) {
        AppUser dbUser = repo.findByUsername(user.getUsername()).orElseThrow();
        if (encoder.matches(user.getPassword(), dbUser.getPassword())) {
            return jwtUtil.generateToken(user.getUsername());
        }
        throw new RuntimeException("Invalid credentials");
    }
}
