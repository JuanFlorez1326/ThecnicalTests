import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Messages } from '../../interfaces/messages.interface';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  messages: any = []
  
  constructor(
    private readonly messagesService: MessagesService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.messagesService.getMessages()
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteMsg(id: string) {
    this.messagesService.deleteMsg(id)
    .subscribe(
      (data) => {
        console.log(data)
        window.location.reload();
        this.router.navigate(['/messages']); 
      },
      (error) => { 
        console.log(error) 
      }
    );
  }
}
