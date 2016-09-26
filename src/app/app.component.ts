import { Component } from '@angular/core';
import { User } from './user'


const USERS = [
    new User("jfk", "abc", 20, 50, 170),
    new User("jjj", "abc", 30, 50, 170),
    new User("222", "abc", 129, 50, 170)
] 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "this is my title";
  selectedUser:User
  users:Array<User>
  isEditMode:Boolean = false;

  constructor(){
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge(){
    //if(this.user.age >= 100)
    if(this.selectedUser.isOld())
      alert("Too Old")
    else
      alert("Ok")
  }

  onCheckBMI(){
    alert("BMI:" + this.selectedUser.getBMI() )
  }

  deleteUser(index){
    this.users.splice(index, 1);
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name")
    tempUser.password = prompt("password")
    tempUser.age = Number(prompt("age"))
    tempUser.weight = Number(prompt("weight"))
    tempUser.height = Number(prompt("height"))
    this.users.push( new User(
      tempUser.name,
      tempUser.password,
      tempUser.age,
      tempUser.weight,
      tempUser.height
    )  )//end of this.users.push
  }//end of addUse


}
