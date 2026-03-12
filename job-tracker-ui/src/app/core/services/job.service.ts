import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private api = 'http://localhost:8080/api/jobs';
  jobsApplied = signal<Job[]>([]);
  constructor(private http: HttpClient) {}

  getJobs() {
    //   return this.http.get<Job[]>(this.api);
    this.http.get<Job[]>(this.api).subscribe((data) => {
      this.jobsApplied.set(data); // This updates EVERYTHING listening to it
    });
  }

  addJob(job: Job) {
    return this.http.post<Job>(this.api, job);
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
