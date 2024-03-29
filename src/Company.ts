import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  // declaring variables
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'yellow';
  
  // initializing variables
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}