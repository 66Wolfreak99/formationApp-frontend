import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HeaderComponent } from './header/header.component';
import { ProjectService } from './services/project.service';
import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [
  {path: 'new', component: NewProjectComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: '',   redirectTo: '/projects', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
