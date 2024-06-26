export enum LengthComment {
  Max = 300,
  Min = 50,
}

export const MAX_NEAR_OFFERS_COUNT = 3;

export const MAX_IMAGES_COUNT = 6;

export const MAX_REVIEWS_COUNT = 10;

export const MIN_LENGTH_PASSWORD = 2;

export enum PlacesOption {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum Locations {
  Paris ='Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Empty = '/empty'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RatingValues {
  Perfect = '5',
  Good = '4',
  Normal = '3',
  Bad = '2',
  'Not Bad' = '1'
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const DEFAULT_CITY = Locations.Paris;

export const LocationsData = {
  [Locations.Paris]: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  [Locations.Amsterdam]: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  [Locations.Brussels]: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  [Locations.Cologne]: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  [Locations.Dusseldorf]: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  [Locations.Hamburg]: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  }
} as const;

export const TileLayerPattern = {
  URL: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
  Comments = 'COMMENTS',
  User = 'USER',
}

export enum StatusLoading {
  None,
  Loading,
  Success,
  Failed,
}

export enum ErrorMessages {
  Login = 'Enter a valid email address',
  Password = 'The password must contain at least one letter and one number',
  Post = 'Failed to send data',
}
