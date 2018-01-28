export interface Hike {
    id: number;
    name: string;
    description: string;
    difficultyLevel: string; // easy, moderate, hard, strenuous
    distance: number; // in miles
    elevationGain: number; // in feet
    routeType: string; // out-and-back, loop, point-to-point
    starRating: number;
    imageUrl: string;
}
