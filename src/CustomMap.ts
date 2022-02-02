import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  // declaring variables
  private googleMap: google.maps.Map; //default modifier public

  constructor(divId: string) {
    // initializing variables
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // little bad code
  // in case if there are many classes like user and company
  // it may result in a big or statement
  addMarker(mappable: User | Company): void { //(mappable: User | Company) - only the variables common in both the given types, here position
    new google.maps.Marker({
      map: this.googleMap, //on which map to mark
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  };

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // };

}

// Maps class 
// constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions)
// ? is optional argument

// To restrict the use of other function of map than what is 
// required in this app a custom map app is created by 
// extending to google Map class

// class Marker extends google.maps.MVCObject {
//   constructor(opts?: google.maps.MarkerOptions|null);
// MarkerOptions is an interface
// options we'll be using are,
// map?: google.maps.Map|null|google.maps.StreetViewPanorama;
// position?: google.maps.LatLng|null|google.maps.LatLngLiteral;

// In typescript, classes kind of have like a dual nature, 
// when we make a class, we can use it to create an instance 
// of an object, but we can also use a class or a variable 
// that refers to a class, which is what user and company 
// are to refer to that type as well-to specify type of variable.
