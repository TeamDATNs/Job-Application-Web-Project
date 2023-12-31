package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.MainField;
import net.kaczmarzyk.spring.data.jpa.domain.In;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainFieldRepository extends JpaRepository<MainField, Integer> {
}
