import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  elements: string[];
  inputText: string;

  constructor() {
    this.inputText = '';
    this.elements = [];
  }
  ngOnInit(): void {

  }
  inputToArray(): void {
    if (this.inputText.trim()) {
      this.elements.push(this.inputText.trim());
      this.inputText = '';
    }
  }
  remove(index: number): void {
    this.elements.splice(index, 1);
    console.log("remove " + index);
  }
}
