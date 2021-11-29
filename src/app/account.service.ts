import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}
  activeAccount = ['Ani', 'ana', 'ina'];
  inactiveAccount = ['Joko', 'Jaka', 'Jaki'];
  index: number = 0;

  setToInactive(name: string) {
    this.index = this.activeAccount.findIndex((el) => el === name);
    this.activeAccount.splice(this.index, 1);
    this.inactiveAccount.push(name);
  }

  setToActive(name: string) {
    this.index = this.inactiveAccount.findIndex((el) => el === name);
    this.inactiveAccount.splice(this.index, 1);
    this.activeAccount.push(name);
  }
}
