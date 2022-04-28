import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userName = new FormControl('');
  passWord = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    
  }

}
