import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  activeAccount: string[] = [];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.activeAccount = this.accountService.activeAccount;
  }

  setInactive(name: string) {
    this.accountService.setToInactive(name);
  }
}
