import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './shared/components/user/dashboard/dashboard.component';
import { MainpageComponent } from './shared/views/mainpage/mainpage.component';
import {TutorialComponent } from './subsection/tutorials/tutorial/tutorial.component'

import { ProjectsComponent } from './subsection/projects/projects.component'

import { AuthGuard } from './guards/auth.guard';
import { ViewComponent } from './subsection/tutorials/view/view.component';
import { EditComponent } from './subsection/tutorials/edit/edit.component';
import { CreateComponent } from './subsection/tutorials/create/create.component';
import { ViewTutorialComponent } from './shared/views/tutorials-pages/view-tutorial/view-tutorial.component';
import { TutorialIndexComponent } from './shared/views/tutorials-pages/index/index.component';
import { MyPublicJournalComponent } from './shared/views/my-public-journal/my-public-journal.component';

const routes: Routes = [

  /**
   * Beginning of Starter Routes
   */
  { path: '', component: MainpageComponent, pathMatch: 'full' },
  { path: 'main-page', component: MainpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },

  { path: 'journal', component: MyPublicJournalComponent },
  /**
   * End of Starter Routes
   */

  /**
   * Start of Tutorial Routing
   */
  { path: 'tutorials', redirectTo: 'tutorial', pathMatch: 'full'},
  { path: 'tutorial', component: TutorialIndexComponent },
  { path: 'tutorials/:slug', component: ViewTutorialComponent },

  /**
   * Admin Routes
   */
  { path: 'tutorial/admin', component: TutorialComponent},
  { path: 'tutorial/admin/index', component: TutorialComponent },
  { path: 'tutorial/admin/:slug/view', component: ViewComponent },
  { path: 'tutorial/admin/create', component: CreateComponent },
  { path: 'tutorial/admin/:slug/edit', component: EditComponent  },
  /**
   * End of Tutorial Routing
   */


  /**
   * User Routes
   */
   { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
