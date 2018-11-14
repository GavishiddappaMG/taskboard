import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  backlog1 = [
    {
      title: 'Responsive bug',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Travel checklist',
      description: 'Curabitur blandit tempus porttitor.',
      flag: false,
      status: ''
    },
    {
      title: 'Budget review',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      flag: false,
      status: ''
    },
  ];
  todo = [
    {
      title: 'QA Testing',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: false,
      status: ''
    },
    {
      title: 'Layout design',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: true,
      status: 'in-active'
    },
    {
      title: 'Fix navigation menu',
      description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, portaac consectetur ac, vestibulum at eros.',
      flag: false,
      status: ''
    },
    {
      title: 'Update Bootstrap 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Run build tools',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'List article ideas',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'in-active'
    },
    {
      title: 'Reactjs fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Impelement SSL',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
  ];
  inProcess = [
    {
      title: 'QOS Assessment',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Schedule new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, status: ''
    },
    {
      title: 'Add dashboard varients',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Extended status scheme support',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Merge unit test',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Test final version',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
  ];
  backlog2 = [
    {
      title: 'Integrate Angular 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Additional fields',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Draggable taks board',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Setup CI server',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Assign new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Contack Administrator',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'in-active'
    },
    {
      title: 'Commit changes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
  ];

  completed = [
    {
      title: 'Store new files',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Build landing page',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    },
    {
      title: 'Setup basic layout',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      status: 'active'
    },
    {
      title: 'Graphical fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, status: ''
    },
    {
      title: 'Email Alerts',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      status: ''
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit() {
  }


}
