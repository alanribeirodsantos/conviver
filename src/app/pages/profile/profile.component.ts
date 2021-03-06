import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { User } from 'src/app/models/user';
import { CompatibilityService } from '../../services/compatibility/compatibility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user:User;
  advertisements:Array<any>;
  compatibility:number;

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService, private advertisementService:AdvertisementService, private compatibilityService:CompatibilityService) {
    this.getUserLogged();
  }

  getUserLogged = async () => {
    const idUser = this.activatedRoute.snapshot.params.id;
    const userInfo = this.userService.getUserInfo(idUser);
    let snapshot = null;
    await userInfo.subscribe(
      data => {
        snapshot = data;
        this.user = new User(
          snapshot.id,
          snapshot.firstName, 
          snapshot.lastName, 
          snapshot.email,
          "secretPassword",
          snapshot.age,
          snapshot.genre,
          snapshot.personality,
          snapshot.photo,
          snapshot.description,
          snapshot.city,
          snapshot.state,
          snapshot.country,
          snapshot.since,
          1,
          [],
          []
        )
        this.advertisementService.getUserAdvertisements(this.user.getId())
        .then(snapshot => {
          const advertisements = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }));
          this.advertisements = advertisements;
        }).catch(error => error);
        if(this.user.getId() != this.userService.currentUser.getId()) {
          const data1 = {
            personality: this.userService.currentUser.getPersonality(),
            age: this.userService.currentUser.getAge()
          };
          const data2 = {
            personality: this.user.getPersonality(),
            age: this.user.getAge()
          };
          this.compatibility = Math.round(this.compatibilityService.verifyCompatibility(data1, data2));
        }
      },
      error => console.log(error)
    )
  }
}
