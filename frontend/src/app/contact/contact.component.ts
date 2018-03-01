import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }
  contacts: any;
  ngOnInit() {
    this.http.get('/contacts').subscribe(data => {
      this.contacts = data;
    });
  }  

}
