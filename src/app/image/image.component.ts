import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Output() colorEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public methode(e:string){
    this.colorEmitter.emit(e);
  }




}
