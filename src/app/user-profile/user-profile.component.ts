import { Component } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user: User;
  hideAge = false;

  constructor() {
    this.user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
  }
//   user = {
//     nom : 'Doe',
//     prenom : 'John',
//     age : 25,
//     quote : '',
//     photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
//   };
// hideAge: boolean= false;

//   constructor() { }

//   ngOnInit(): void {}

  buttonage () {
    this.hideAge = !this.hideAge;

  }



}
