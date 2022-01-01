import {makeAutoObservable} from "mobx";

export class UserStore {
  loader: boolean = false;
  userList: any = [];

  constructor() {
    makeAutoObservable(this);
  }
}
