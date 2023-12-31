package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.Candidate;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import com.vn.BackEnd_Job_Website.Model.WishList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface WishListRepository extends JpaRepository<WishList, Integer> {
    @Query(value = "select w from WishList w where w.hiringID.id = :id")
    Optional<WishList> findByHiringID(Integer id);

    Optional<WishList> findByHiringIDAndAndCandidateID(Hiring hiring, Candidate candidate);

    List<WishList> findByCandidateID_Id(Integer candidate_id);


    Boolean existsByCandidateIDAndAndHiringID_Id(Candidate candidate, Integer hiring_id);
}
