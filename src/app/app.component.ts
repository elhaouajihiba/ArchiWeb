import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elhaouaji-hiba-exo1';

  public background:string="";
  public changeBackground(e:string){
    this.background = e;
    console.log(e);

  }
}
