import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title: 'Mango Tree',
      username: 'max',
      content: 'This is a mango tree. This photo has been taken on 16th July,2021',
      imageURL: 'assets/tree2.jpg'
    },

    {
      title: 'Hills',
      username: 'helena',
      content: 'Hills are so beautiful. At evening it feels like sun gonna dive into the hills',
      imageURL: 'assets/hills2.jpg'
    },

    {
      title: 'Sea Beach',
      username: 'smith',
      content: 'Sea seems like It has no limit. When you seat on a beach any one feel inner peace.',
      imageURL: 'assets/sea.jpg'
    }
  ]
}
