package com.backend.backend.repository;

import com.backend.backend.model.jobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface jobRepository extends JpaRepository<jobApplication, Long> {

}
