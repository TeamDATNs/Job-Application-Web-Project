package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.Employer;
import com.vn.BackEnd_Job_Website.Service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private EmployerService employerService;

    @PostMapping("/employer/login")
    public ResponseEntity<String> employerLogin(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        if (employerService.authenticateEmployer(email, password)) {
            // Authentication successful
            return ResponseEntity.ok("Login successful");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
    @PostMapping("/employer/register")
    public ResponseEntity<String> registerEmployer(@RequestBody Employer employer) {
        Employer registeredEmployer = employerService.registerEmployer(employer);
        return ResponseEntity.status(HttpStatus.CREATED).body("Register successful");
    }
}
