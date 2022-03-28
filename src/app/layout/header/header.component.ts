import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  address: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    // this.getLocation();
    this.locationService.getIPAddress().subscribe((res: any) => {
      this.address = `${res?.city}, ${res.countryCode}`;
    });
  }

  logout() {
    this.authService.logoutUser();
  }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         if (position) {
  //           this.lat = position.coords.latitude;
  //           this.lng = position.coords.longitude;
  //           this.locationService
  //             .getAddress(position.coords.latitude, position.coords.longitude)
  //             .subscribe((res) => console.log(res));
  //         }
  //       },
  //       (error) => console.log(error)
  //     );
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }
}
