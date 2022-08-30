import { Component } from '@angular/core';
    import { of } from 'rxjs';  
    import { tap, filter } from 'rxjs/operators';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-ngxs';

  
}
