import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  isCheckedMale: boolean;
  isCheckedFemale: boolean;
  students: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.students = data;
    });

    console.log(this.isCheckedMale + '' + this.isCheckedFemale);
  }

  checkOnChange($event) {
    const val = $event.target.value;
    console.log('values is' + val);
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/Input.json');
  }
}
