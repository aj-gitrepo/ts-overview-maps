/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';

// console.log('hi there');

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

// >parcel index.html

// Maps class 
// constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions)
// ? is optional argument
