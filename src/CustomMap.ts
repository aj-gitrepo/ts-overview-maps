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
}

// Maps class 
// constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions)
// ? is optional argument

// To restrict the use of other function of map than what is 
// required in this app a custom map app is created by 
// extending to google Map class
