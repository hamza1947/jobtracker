import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-job-list',
  imports: [CommonModule, MatFormField, MatLabel, MatTableModule, MatInputModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList implements OnInit {
  // jobs: Job[] = this.JobService.jobsApplied();
  jobs: Job[] = [];
  JobService = inject(JobService);
  displayedColumns: string[] = ['position', 'status', 'applicationDate'];
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
