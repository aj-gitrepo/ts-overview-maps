/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// console.log('hi there');

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

// >parcel index.html

// Maps class 
// constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions)
// ? is optional argument

// To restrict the use of other function of map than what is 
// required in this app a custom map app is created by 
// extending to google Map class

