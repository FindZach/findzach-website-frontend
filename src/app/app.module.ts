import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MainpageComponent } from './shared/views/mainpage/mainpage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardComponent } from './shared/components/user/dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorialComponent } from './subsection/tutorials/tutorial/tutorial.component';
import { ProjectsComponent } from './subsection/projects/projects.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from  '@angular/common/http';
import { ViewComponent } from './subsection/tutorials/view/view.component';
import { SafeHtmlPipe } from './pipe/safe-html-pipe.pipe';
import { EditComponent } from './subsection/tutorials/edit/edit.component';
import { CreateComponent } from './subsection/tutorials/create/create.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { SharebuttonsComponent } from './shared/components/sharebuttons/sharebuttons.component';
import { TutorialIndexComponent } from './shared/views/tutorials-pages/index/index.component';
import { ViewTutorialComponent } from './shared/views/tutorials-pages/view-tutorial/view-tutorial.component';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scss';
import { PrismComponent } from './shared/components/prism/prism.component';
import { ProjectPagesComponent } from './shared/views/project-pages/project-pages.component';
import { ProjectComponent } from './shared/components/project/project.component';
import { ProjectCardComponent } from './shared/components/project/project-card/project-card.component';
import { TutorialListSidemenuComponent } from './shared/components/tutorial-list-sidemenu/tutorial-list-sidemenu.component';


import { httpInterceptorProviders } from './interceptors/http.interceptor';
import { RegisterComponent } from './shared/components/register/register.component';
import { UserProfileComponent } from './shared/views/user-profile/user-profile.component';
import { MyPublicJournalComponent } from './shared/views/my-public-journal/my-public-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MainpageComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    TutorialComponent,
    ProjectsComponent,
    ViewComponent,
    SafeHtmlPipe,
    EditComponent,
    CreateComponent,
    SharebuttonsComponent,
    TutorialIndexComponent,
    ViewTutorialComponent,
    PrismComponent,
    ProjectPagesComponent,
    ProjectComponent,
    ProjectCardComponent,
    TutorialListSidemenuComponent,
    RegisterComponent,
    UserProfileComponent,
    MyPublicJournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    EditorModule,
    FormsModule
  ],
  providers: [AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [
    PrismComponent,
    ProjectPagesComponent,
    ProjectComponent,
    ProjectCardComponent
  ]
})
export class AppModule { }
