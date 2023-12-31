package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class WishList {
    @Id
    @Column(name = "WishListID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CandidateID")
    private Candidate candidateID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "HiringID")
    private Hiring hiringID;

}