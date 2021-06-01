import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects: Project[] = [
    {
      title: "Test",
      description: "It's a test",
      tasks: [
        {name:"this is a task"},
        {name:"this is a task"},
        {name:"this is a task"},
      ],
    },
    {
      title: "Test 2",
      description: "This is also a test",
      tasks: [
        {name:"this is a task"},
        {name:"this also is a task"},
        {name:"this is a task"},
        
      ],
    },
    {
      title: "Oi cunt",
      description: "Get out of my swamp",
      tasks: [
        {name:"Cut the onio"},
        {name:"mmm delicious onio"},
        {name:"this is a big onio"},
      ],
    },
  ];
  projectSubject = new Subject<Project[]>();

  emitProject(){
    this.projectSubject.next(this.projects)
  }

  createNewProject(newProject: Project){
    this.projects.push(newProject);
    this.emitProject()

  }

  deleteProject(project: Project){
    const projectIndexToRemove = this.projects.findIndex(
      (projectEl) => {
        console.log(projectEl);
        if(projectEl === project){
           true
        }
      }
    );
    console.log(projectIndexToRemove)
    this.projects.splice(projectIndexToRemove, 1);
    this.emitProject();
  }
}
