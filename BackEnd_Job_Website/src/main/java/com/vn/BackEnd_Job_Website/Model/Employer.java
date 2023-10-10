package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employerID", nullable = false)
    private Integer id;


    @Nationalized
    @Column(name = "name")
    private String name;

    @Nationalized
    @Column(name = "email")
    private String email;

    @Nationalized
    @Column(name = "password")
    private String password;

}