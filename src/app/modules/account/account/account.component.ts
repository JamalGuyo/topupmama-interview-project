import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user = {
    name: 'John Doe',
    title: 'Frontend Developer',
  };
  constructor() {}

  ngOnInit(): void {}
}
