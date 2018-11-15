import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SharedService } from '../../shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  backlog1 = [
    {
      id: '1',
      title: 'Responsive bug',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: true,
      color: 'green'
    },
    {
      id: '2',
      title: 'Travel checklist',
      description: 'Curabitur blandit tempus porttitor.',
      flag: false,
      color: ''
    },
    {
      id: '3',
      title: 'Budget review',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      flag: false,
      color: ''
    },
  ];
  todo = [
    {
      id: '4',
      title: 'QA Testing',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: false,
      color: ''
    },
    {
      id: '5',
      title: 'Layout design',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      flag: true,
      color: 'red'
    },
    {
      id: '6',
      title: 'Fix navigation menu',
      description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, portaac consectetur ac, vestibulum at eros.',
      flag: false,
      color: ''
    },
    {
      id: '7',
      title: 'Update Bootstrap 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      id: '8',
      title: 'Run build tools',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '9',
      title: 'List article ideas',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'red'
    },
    {
      id: '10',
      title: 'Reactjs fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '11',
      title: 'Impelement SSL',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];
  inProcess = [
    {
      id: '12',
      title: 'QOS Assessment',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '13',
      title: 'Schedule new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, color: ''
    },
    {
      id: '14',
      title: 'Add dashboard varients',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      id: '15',
      title: 'Extended color scheme support',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '16',
      title: 'Merge unit test',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '17',
      title: 'Test final version',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];
  backlog2 = [
    {
      id: '18',
      title: 'Integrate Angular 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      id: '19',
      title: 'Additional fields',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '20',
      title: 'Draggable taks board',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '21',
      title: 'Setup CI server',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      id: '22',
      title: 'Assign new tasks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '23',
      title: 'Contack Administrator',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'red'
    },
    {
      id: '24',
      title: 'Commit changes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
  ];

  completed = [
    {
      id: '25',
      title: 'Store new files',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '26',
      title: 'Build landing page',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    },
    {
      id: '27',
      title: 'Setup basic layout',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: true,
      color: 'green'
    },
    {
      id: '28',
      title: 'Graphical fixes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false, color: ''
    },
    {
      id: '29',
      title: 'Email Alerts',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      flag: false,
      color: ''
    }
  ];

  constructor(
    private sharedService: SharedService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const id = event.item.element.nativeElement.id;
      const index = event.previousContainer.data.findIndex((obj) => obj.id === id);
      this.openDialog({ ...event.previousContainer.data[index] });
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  openDialog(element: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {
        id: element.id,
        title: 'Do want to store history ?',
        comment: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sharedService.addComments({ ...result, title: element.title });
    });
  }

  gotoHistory(id: string) {
    this.router.navigate(['/taskboard/history', id]);
    console.log('tryin...');
  }


}

@Component({
  selector: 'app-modal',
  templateUrl: 'comment-dialog.html',
  styleUrls: ['./comment.dialog.css']
})
export class ModalComponent implements OnInit {

  modalForm: FormGroup;
  comment: string;
  id: string;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.comment = data.comment;
    this.id = data.id;
  }

  ngOnInit() {
    this.modalForm = this.fb.group({
      comment: [this.comment]
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close({ id: this.id, comment: this.modalForm.value.comment, time: new Date() });
  }

}
