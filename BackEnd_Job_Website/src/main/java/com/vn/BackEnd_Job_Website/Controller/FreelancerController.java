package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.Freelancer;
import com.vn.BackEnd_Job_Website.Respository.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/freelancers")
public class FreelancerController {
    private final FreelancerRepository freelancerRepository;

    @Autowired
    public FreelancerController(FreelancerRepository freelancerRepository) {
        this.freelancerRepository = freelancerRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Freelancer> getFreelancer(@PathVariable Integer id) {
        Optional<Freelancer> freelancer = freelancerRepository.findById(id);
        return freelancer.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Freelancer> createFreelancer(@RequestBody Freelancer freelancer) {
        Freelancer createdFreelancer = freelancerRepository.save(freelancer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdFreelancer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Freelancer> updateFreelancer(@PathVariable Integer id, @RequestBody Freelancer freelancer) {
        if (!freelancerRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        freelancer.setId(id);
        Freelancer updatedFreelancer = freelancerRepository.save(freelancer);
        return ResponseEntity.ok(updatedFreelancer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFreelancer(@PathVariable Integer id) {
        if (!freelancerRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        freelancerRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}


