import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";

@Component({
  selector: 'page-settings',
  providers: [UserServiceProvider],
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public loggedInUser: any;

  passwordOld = "";
  passwordNew = "";
  passwordNewRepeat = "";
  newPWValid = false;
  emailInput = this.emailInput;

  constructor(public navCtrl: NavController, public userService: UserServiceProvider) {
    this.loadUserData();
  }

  loadUserData() {
    this.loggedInUser = this.userService.loadUserById(0);
  }

  onEmailInput(text) {
    console.log(text);
    console.log(this.emailInput);
  }

  onInputPW(text){
    this.passwordOld = text;
    if(text.toString().length >= 8){
      this.newPWValid = true;
    }
  }

  onInputOldPW(text) {
    //TODO
    console.log(document.getElementById("vorname"));
  }

  onInputNewPW(text){
    this.passwordNew = text;
  }

  onInputNewPWRepeat(text){
    this.passwordNewRepeat = text;
  }

  saveSettings(){
    if(this.newPWValid && this.passwordNew.toString()===this.passwordNewRepeat.toString()){ //TODO correct old password?
      //success message
    }
    else{
      //fail message
    }
  }
}
