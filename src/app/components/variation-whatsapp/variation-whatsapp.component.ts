import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variation-whatsapp',
  templateUrl: './variation-whatsapp.component.html',
  styleUrls: ['./variation-whatsapp.component.css']
})
export class VariationWhatsappComponent implements OnInit {
  show = {
    retweet: true,
    read: true,

  };
  value = 'Probability %';
  value2 = 'Variation 2';
  value3 = 'Variation 3';

  constructor() { }

  ngOnInit(): void {
  }

}
