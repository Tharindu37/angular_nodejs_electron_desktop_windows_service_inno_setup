import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './service/backend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  message = '';

  constructor(private backendService: BackendService) {}

  sendRequest() {
    this.backendService.getRequest().subscribe((res) => {
      this.message = res.message;
    });
  }

  clear() {
    this.message = '';
  }
}
