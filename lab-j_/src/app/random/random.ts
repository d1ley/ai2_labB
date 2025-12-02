import {Component, Input} from '@angular/core';
import {RandomService} from '../random';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-random',
  imports: [
    NgIf
  ],
  templateUrl: './random.html',
  styleUrls: ['./random.css'],
})
export class RandomComponent  {
  myNumber!: number;

  @Input() max: number = 10;

  constructor(private randomService: RandomService) {}

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean {
    return this.myNumber <= this.max / 2;
  }
}
