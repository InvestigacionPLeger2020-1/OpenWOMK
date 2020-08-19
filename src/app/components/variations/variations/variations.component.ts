import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {VariationService} from '../../../services/variation.service';
@Component({
  selector: 'app-text-box',
  template: `
    <div class="container">
    <div class="col-sm-12" style="text-align:right; ">
      <button  mat-icon-button mat-dialog-close color="warn" id="botonvar" (click)="sendData(textbox.value)">
        <mat-icon>clear</mat-icon>
      </button>
    </div>
      <h5 class="card-header text-center font-weight-bold text-uppercase py-4">{{textValue}}</h5>
      <br>
        <input #textbox type="number" required placeholder="0.5 = 50%">
        <button class="btn btn-primary col-md-2 text-white btn-sm" (click)="logText(textbox.value)">Confirm</button>
      <br>
      <br>
      <mat-checkbox [(ngModel)]="show.retweet">1 Retweet per tweet</mat-checkbox>
      <br>
      <mat-checkbox [(ngModel)]="show.read">1 Read per tweet</mat-checkbox>
    </div>
  `
})

export class VariationsComponent implements OnInit {


    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, private variationService: VariationService){
    }
  show = {
    retweet: false,
    read: false,
  };
  textValue = 'Variations';
  log: any;
  value = 'Probability %';
  value2 = 'X value';
  value3 = 'Period';
  probability = this.log;

  logText(value: string): void {
    this.log = `${value}`;
    this.probability = Number(this.log);
    this.variationService.sendProbability(this.probability);
  }
  sendData(value: string){
    this.log = `${value}`;
    this.probability = Number(this.log);
    this.variationService.sendProbability(this.probability);
  }
    ngOnInit(): void {
    }
  }

