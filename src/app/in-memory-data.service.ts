import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id : 1,
        name: 'shai',
        location:
          {
            name:"Paris Office",
            longitude:2.3522219000000177,
            latitude:48.856614
          }
      },
      {
        id : 2,
        name: 'shai2',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 3,
        name: 'shai3',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 4,
        name: 'shai4',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 5,
        name: 'shai5',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 6,
        name: 'shai6',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 7,
        name: 'shai7',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      },
      {
        id : 8,
        name: 'shai8',
        location:
          {
            name:"shai's Office",
            longitude:123,
            latitude:123
          }
      }
    ]
    return {heroes};
  }
}
