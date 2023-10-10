package com.vn.BackEnd_Job_Website.Service;

import com.vn.BackEnd_Job_Website.Model.Employer;

public interface EmployerService {

    boolean authenticateEmployer(String email, String password);

    Employer registerEmployer(Employer employer);
}

