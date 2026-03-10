package com.backend.backend.service;

import com.backend.backend.model.jobApplication;
import com.backend.backend.repository.jobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class jobService {

    private final jobRepository jobRepository;

    public jobService(jobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<jobApplication> getAllJobs() {
        return jobRepository.findAll();
    }

    public jobApplication saveJob(jobApplication job) {
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
