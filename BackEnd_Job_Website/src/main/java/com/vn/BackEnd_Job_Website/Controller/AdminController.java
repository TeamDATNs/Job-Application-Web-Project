package com.vn.BackEnd_Job_Website.Controller;


import com.vn.BackEnd_Job_Website.Dto.ResponseReportDTO;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.CandidateRepository;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import com.vn.BackEnd_Job_Website.Service.EmailService;
import com.vn.BackEnd_Job_Website.Utils.BuildEmail;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final HiringRepository hiringRepository;
    private final CompanyRepository companyRepository;
    private final CandidateRepository candidateRepository;
    private final AccountRepository accountRepository;
    private final EmailService emailService;

    @GetMapping("/report")
    public ResponseEntity<?> report(){
        return new ResponseEntity<>(ResponseReportDTO.builder()
                .jobs(hiringRepository.count())
                .jobsOpen(hiringRepository.countJobsOpen())
                .jobsClose(hiringRepository.countJobsClose())
                .company(companyRepository.count())
                .candidate(candidateRepository.count())
                .build(),HttpStatus.OK);
    }

    @GetMapping("/companies/pending")
    public ResponseEntity<?> getPendingCompanies() {
        return new ResponseEntity<>(companyRepository.findByAccountStatusIsFalse(), HttpStatus.OK);
    }

    @GetMapping("/company")
    public ResponseEntity<?> getCompanies() {
        return new ResponseEntity<>(companyRepository.findAll(), HttpStatus.OK);
    }


//    chưa gửi mail
    @PatchMapping("/companies/{companyId}/accept")
    public ResponseEntity<String> acceptCompany(@PathVariable Integer companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        Account account = company.getAccount();
        if (account != null && !account.getStatus()) {
            account.setStatus(true);
            accountRepository.save(account);
            emailService.send(
                    account.getEmail(),
                    BuildEmail.accountApprovedEmail(company.getCompanyName()));
            return new ResponseEntity<>("Company accepted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Company not found or already accepted", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/companies/{candidateId}/delete")
    public ResponseEntity<String> deleteCompany(@PathVariable Integer companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        Account account = company.getAccount();
        if (account != null && !account.getStatus()) {
            account.setStatus(null);
            accountRepository.save(account);
            return new ResponseEntity<>("Company remove successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Company not found or already remove", HttpStatus.BAD_REQUEST);
        }
    }



    @GetMapping("/candidates/pending")
    public ResponseEntity<?> getPendingCandidates() {
        return new ResponseEntity<>(candidateRepository.findByAccountStatusIsFalse(), HttpStatus.OK);
    }

    @GetMapping("/candidate")
    public ResponseEntity<?> getCandidates() {
        return new ResponseEntity<>(candidateRepository.findAll(), HttpStatus.OK);
    }

    @PatchMapping("/candidates/{candidateId}/accept")
    public ResponseEntity<String> acceptCandidate(@PathVariable Integer candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidate not found"));
        Account account = candidate.getAccount();
        if (account != null && !account.getStatus()) {
            account.setStatus(true);
            accountRepository.save(account);
            return new ResponseEntity<>("Candidate accepted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Candidate not found or already accepted", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/candidates/{candidateId}/delete")
    public ResponseEntity<String> deleteCandidate(@PathVariable Integer candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidate not found"));
        Account account = candidate.getAccount();
        if (account != null && !account.getStatus()) {
            account.setStatus(null);
            accountRepository.save(account);
            return new ResponseEntity<>("Candidate remove successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Candidate not found or already remove", HttpStatus.BAD_REQUEST);
        }
    }

    
}
