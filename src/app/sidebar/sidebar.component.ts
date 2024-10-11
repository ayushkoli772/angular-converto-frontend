import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @Output() emitter = new EventEmitter();

  conversions = [
    { name: 'JSON to TypeScript', value: {prev:'JSON',new:'TypeScript'} },
    { name: 'HTML to JSX', value: {prev:'HTML',new:'JSX'} },
    { name: 'CSS to JS Objects', value: {prev:'CSS',new:'JS Objects'} },
    { name: 'GraphQL to Java', value: {prev:'GraphQL',new:'Java'} }
  ]

  ngOnInit() {
    this.emitter.emit(this.conversions[0].value);
  }

  selectedOption(option:{name:string, value:{prev:string,new:string}}){
    this.emitter.emit(option.value);
  }

}
