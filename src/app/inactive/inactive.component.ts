import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
})
export class InactiveComponent implements OnInit {
  inactiveAccount: string[] = [];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.inactiveAccount = this.accountService.inactiveAccount;
  }

  setActive(name: string) {
    this.accountService.setToActive(name);
  }
}
