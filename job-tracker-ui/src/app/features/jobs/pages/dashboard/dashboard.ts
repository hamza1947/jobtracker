import { Component, inject, OnInit } from '@angular/core';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  imports: [MatFormField],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  total = 0;
  interviews = 0;
  offers = 0;
  rejected = 0;

  private JobService = inject(JobService);
  jobs: Job[] = [];
  ngOnInit(): void {
    this.JobService.getJobs();
    this.jobs = this.JobService.jobsApplied();
    this.loadJobs();
  }

  loadJobs() {
    this.total = this.jobs.length;
    console.log('Loading jobs...', this.jobs.length);

    this.interviews = this.jobs.filter((job: Job) => job.status === 'INTERVIEW').length;

    this.offers = this.jobs.filter((job: Job) => job.status === 'OFFER').length;

    this.rejected = this.jobs.filter((job: Job) => job.status === 'REJECTED').length;
  }
}
