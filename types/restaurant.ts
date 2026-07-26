export interface Restaurant {
  id: string;

  name: string;

  rating: number;

  reviews: number;

  address: string;

  open: boolean;

  priceLevel: string;

  photos: {
    name: string;
  }[];
}