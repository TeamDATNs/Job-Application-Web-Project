package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class ApplicationStatus {
    @Id
    @Column(name = "statusID", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "statusName")
    private String statusName;

}