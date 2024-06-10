import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message: string = '';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getMessage().subscribe(message => {
      this.message = message;
      setTimeout(() => this.message = '', 3000); // Limpa a mensagem após 3 segundos
    });
  }

}
