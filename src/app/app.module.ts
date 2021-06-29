import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HeaderComponent } from './header/header.component';
import { ProjectService } from './services/project.service';
import { NewProjectComponent } from './new-project/new-project.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuard } from './guard/auth-guard';

const appRoutes: Routes = [
  {path: 'new',canActivate: [AuthGuard], component: NewProjectComponent},
  {path: 'projects',canActivate: [AuthGuard], component: ProjectListComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signin', component: SignInComponent},
  {path: '',   redirectTo: '/projects', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    NewProjectComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProjectService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
