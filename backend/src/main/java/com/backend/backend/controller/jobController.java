package com.backend.backend.controller;

import com.backend.backend.model.jobApplication;
import com.backend.backend.service.jobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class jobController {

    private final jobService jobService;

    public jobController(jobService jobService){
        this.jobService = jobService;
    }

    @GetMapping
    public List<jobApplication> getJobs(){
        return jobService.getAllJobs();
    }

    @PostMapping
    public jobApplication createJob(@RequestBody jobApplication job){
        return jobService.saveJob(job);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id){
        jobService.deleteJob(id);
    }
}
