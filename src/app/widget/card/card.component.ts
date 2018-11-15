import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() flag: string;
  @Input() color: string;
  @Output() iconClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navigate() {
    this.iconClick.emit();
  }

}
