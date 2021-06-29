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
    
    this.projectService.getStuff()
    this.projectService.emitProject();
    
    console.log("Heyyy "+ this.projects[2]);
  }

  onSave(projects: Project[],){
    this.projectService.saveProject(projects)
  }

  onDelete(project: Project, index){;
    console.log(project, index);
    this.projectService.deleteProject(project, index);
  }

  onDeleteTask(project:Project,index, taskIndex){
    console.log(project, index, taskIndex);
    this.projectService.deleteTask(project, index, taskIndex);

  }

  ngOnDestroy(){
    this.projectSubscription.unsubscribe()
  }

  getClass(index, taskIndex){
    if(this.projects[index].tasks[taskIndex].isComplete ){
      return 'list-group-item list-group-item-success'
    } else{
      return 'list-group-item'
    }
  }

  onCompleteTask(index, taskIndex){
    this.projectService.completeTask(index, taskIndex)  

    
  }

}
