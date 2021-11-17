import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-smallcarre',
  templateUrl: './smallcarre.component.html',
  styleUrls: ['./smallcarre.component.scss']
})
export class SmallcarreComponent implements OnInit {
  @Input() color:string="";
  @Output() colorChange=new EventEmitter<string>();
  constructor() {

  }

  ngOnInit(): void {
  }

  public changeColor(classelem:string) {
    this.colorChange.emit(classelem);
  }




}
