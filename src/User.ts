import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  // declaring variables
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  color: string = 'red';

  // initializing variables
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}

// faker.address.latitude() - is a string
// convert to number using parseFloat