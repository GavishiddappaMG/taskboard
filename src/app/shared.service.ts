import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  commentsContainer = [];

  constructor() { }

  getComments(id): Array<any> {
    return this.commentsContainer.filter((item) => item.id === id);
  }

  addComments(comment: any) {
    this.commentsContainer.push(comment);
  }
}
