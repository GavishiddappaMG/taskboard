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
      color: 'green'
    },
    {
      title: 'Travel checklist',
      description: 'Curabitur blandit tempus porttitor.',
      flag: false,
      color: ''
    },
    {
      title: 'Budget review',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      flag: false,
      color: ''
    },
  ];
  todo = [
    {
      title: 'QA Testing',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: false,
      color: ''
    },
    {
      title: 'Layout design',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: true,
      color: 'red'
    },
    {
      title: 'Fix navigation menu',
      description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, portaac consectetur ac, vestibulum at eros.',
      flag: false,
      color: ''
    },
    {
      title: 'Update Bootstrap 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      title: 'Run build tools',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'List article ideas',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'red'
    },
    {
      title: 'Reactjs fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Impelement SSL',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];
  inProcess = [
    {
      title: 'QOS Assessment',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Schedule new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, color: ''
    },
    {
      title: 'Add dashboard varients',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      title: 'Extended color scheme support',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Merge unit test',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Test final version',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];
  backlog2 = [
    {
      title: 'Integrate Angular 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      title: 'Additional fields',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Draggable taks board',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Setup CI server',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      title: 'Assign new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Contack Administrator',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'red'
    },
    {
      title: 'Commit changes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];

  completed = [
    {
      title: 'Store new files',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Build landing page',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      title: 'Setup basic layout',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      title: 'Graphical fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, color: ''
    },
    {
      title: 'Email Alerts',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
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
