import { Injectable } from '@angular/core';

import { Hike } from './hike';

@Injectable()
export class HikesService {

  getHikes(): Hike[] {
    return [
      {
        id: 1,
        name: 'McAlpine Creek Greenway to Campbell Creek Greenway',
        description: 'A moderately trafficked out and back trail located in Charlotte, North Carolina that features a lake. The trail is primarily used for hiking, trail running, and mountain biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
        difficultyLevel: 'Moderate',
        distance: 8.3,
        elevationGain: 108,
        routeType: 'Out and Back',
        rating: 4.1,
        imageUrl: 'https://cdn-assets.alltrails.com/uploads/photo/image/19051874/extra_large_d4723491da714392d2e3325f6e3f3908.jpg',
      }
    ];
  }

}
