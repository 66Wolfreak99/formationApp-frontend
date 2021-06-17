import {Task} from './task.model'
export class Project {
    tasks: Task[];
    constructor(
        public title: string, 
        public description: string){}
}