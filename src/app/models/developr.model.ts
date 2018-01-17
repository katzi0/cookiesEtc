import {OfficeLocation} from './office.location';
export class Developer {
  id?:number;
  name:string;
  location?: OfficeLocation;

  constructor(){ //officeLocation: OfficeLocation
    this.name = '',
    this.location.name =  '',
    this.location.latitude = 0,
    this.location.longitude = 0;
  }
  static generateMockDeveloper(): Developer{
    return {
      id: 0,
      name: 'new name',
      location: {longitude: 0, latitude: 0, name: ''}
    };
  }
}

