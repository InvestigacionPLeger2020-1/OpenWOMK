import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variation-facebook',
  templateUrl: './variation-facebook.component.html',
  styleUrls: ['./variation-facebook.component.css']
})
export class VariationFacebookComponent implements OnInit {
  show = {
    retweet: true,
    read: true,

  };
  value = 'Probability %';
  value2 = 'Variation';
  constructor() { }

  ngOnInit(): void {
  }

}
