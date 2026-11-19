export interface PlatformRating {
  score: number;
  maxScore: number;
  reviewCount: number;
  url: string;
}

export const ratings: {
  google: PlatformRating;
  booking?: PlatformRating;
} = {
  google: {
    score: 5,
    maxScore: 5,
    reviewCount: 40,
    url: "https://maps.app.goo.gl/nrS5Xysdsn9fTQcW6",
  },
};
