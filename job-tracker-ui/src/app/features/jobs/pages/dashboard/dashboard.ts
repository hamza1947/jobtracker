import { Component, inject, OnInit } from '@angular/core';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  total = 0;
  interviews = 0;
  offers = 0;
  rejected = 0;

  private JobService = inject(JobService);
  jobs: Job[] = this.JobService.jobsApplied();
  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.total = this.jobs.length;

    this.interviews = this.jobs.filter((job: Job) => job.status === 'INTERVIEW').length;

    this.offers = this.jobs.filter((job: Job) => job.status === 'OFFER').length;

    this.rejected = this.jobs.filter((job: Job) => job.status === 'REJECTED').length;
  }
}
