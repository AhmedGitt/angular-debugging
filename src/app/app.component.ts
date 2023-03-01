import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-app';
  servers= [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id + 0;
    this.servers.splice(position, 1);
  }
}
