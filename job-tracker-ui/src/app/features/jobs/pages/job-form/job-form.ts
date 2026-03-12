import { Component } from '@angular/core';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatOption, MatSelect } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-job-form',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatSelect,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './job-form.html',
  styleUrl: './job-form.css',
})
export class JobForm {
  job: Job = {
    companyName: '',
    position: '',
    location: '',
    status: 'APPLIED',
    applicationDate: '',
    jobLink: '',
    notes: '',
  };

  constructor(
    private JobService: JobService,
    private router: Router,
  ) {}

  submit() {
    this.JobService.addJob(this.job).subscribe(() => {
      this.router.navigate(['/jobs']);
    });
  }
}
