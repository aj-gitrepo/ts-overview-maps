import faker from "@faker-js/faker";

export class User {
  // declaring variables
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  // initializing variables
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}

// faker.address.latitude() - is a string
// convert to number using parseFloat