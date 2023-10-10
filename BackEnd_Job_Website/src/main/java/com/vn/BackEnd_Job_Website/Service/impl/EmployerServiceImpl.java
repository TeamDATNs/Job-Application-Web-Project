package com.vn.BackEnd_Job_Website.Service.impl;

import com.vn.BackEnd_Job_Website.Model.Employer;
import com.vn.BackEnd_Job_Website.Respository.EmployerRepository;
import com.vn.BackEnd_Job_Website.Service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class EmployerServiceImpl implements EmployerService {
    @Autowired
    private EmployerRepository employerRepository;

    public Employer findByEmail(String email) {
        return employerRepository.findByEmail(email);
    }
    @Override
    public boolean authenticateEmployer(String email, String password) {
        Employer employer = employerRepository.findByEmail(email);
        return employer != null && employer.getPassword().equals(password);
    }
    @Override
    public Employer registerEmployer(Employer employer) {
        if (employerRepository.findByEmail(employer.getEmail()) != null) {
            throw new DuplicateKeyException("Email already exist");
        }
        return employerRepository.save(employer);
    }
}
