import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, ) { }
  projects: Project[] = [
    {
      title: "Test",
      description: "It's a test",
      tasks: [
        {name:"this is a task", isComplete: false},
        {name:"this is a task", isComplete: true},
        {name:"this is a task", isComplete: false}
      ]
    },
    {
      title: "Test 2",
      description: "This is also a test",
      tasks: [
        {name:"this is a task", isComplete: false},
        {name:"this also is a task", isComplete: false},
        {name:"this is a task", isComplete: false},
        {name:"this is a task", isComplete: false},
        {name:"a task this is", isComplete: false}
        
      ]
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

  deleteProject(project: Project, index){
    
    this.projects.splice(index, 1);
    this.emitProject();
  }

  deleteTask(project:Project, index, taskIndex){
    this.projects[index].tasks.splice(taskIndex, 1);
    this.emitProject();

  }

  taskClass(index, taskIndex){
    if(this.projects[index].tasks[taskIndex].isComplete ){
      return 'list-group-item list-group-item-success'
    } else{
      return 'list-group-item'
    }
  }

  completeTask(index, taskIndex){
    let isTaskComplete = this.projects[index].tasks[taskIndex].isComplete ;
    console.log(isTaskComplete)
    if(isTaskComplete === false ){
      isTaskComplete = true;
      this.emitProject()
      console.log(isTaskComplete)
    } else if(isTaskComplete === true){
      isTaskComplete = false;
      this.emitProject()
      console.log(isTaskComplete)
    }
    
  }

  saveProject(project:Project[]){
    return new Promise((resolve, reject)=>{
      console.log("Yooo  " + project);
      this.http.post(
        'http://localhost:3000/api/posts/',
        {project: project}
      ).subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  getStuff() {
    this.http.get('http://localhost:3000/api/posts').subscribe(
      (projects: Project[]) => {
        if (projects) {
          this.projects = projects;
          this.emitProject();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}


