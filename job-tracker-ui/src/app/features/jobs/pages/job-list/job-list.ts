import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList implements OnInit {
  // jobs: Job[] = this.JobService.jobsApplied();
  jobs: Job[] = [];
  JobService = inject(JobService);

  ngOnInit(): void {
    this.JobService.getJobs();
    // this.jobs = this.JobService.jobsApplied();
  }

  // loadJobs() {
  //   this.JobService.getJobs().subscribe((data) => {
  //     this.jobs = data;
  //     console.log(this.jobs);
  //   });
  // }

  delete(id?: number) {
    if (!id) return;

    this.JobService.deleteJob(id).subscribe(() => {
      // this.loadJobs();
    });
  }
}
