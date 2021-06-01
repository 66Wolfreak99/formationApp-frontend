import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  projects: Project[];
  projectSubscription: Subscription;

  constructor(private projectService: ProjectService) { }


  ngOnInit(): void {
    this.projectSubscription = this.projectService.projectSubject.subscribe(
      (projects: Project[]) =>{
        this.projects = projects;
      }
    );
    this.projectService.emitProject()
  }

  onDelete(project: Project){;
    console.log(project);
    this.projectService.deleteProject(project);
  }

  ngOnDestroy(){
    this.projectSubscription.unsubscribe()
  }

}
