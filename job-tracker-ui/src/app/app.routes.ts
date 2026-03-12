import { Routes } from '@angular/router';
import { Dashboard } from './features/jobs/pages/dashboard/dashboard';
import { JobList } from './features/jobs/pages/job-list/job-list';
import { JobForm } from './features/jobs/pages/job-form/job-form';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: Dashboard },

  { path: 'jobs', component: JobList },

  { path: 'add', component: JobForm },
];
