export interface Movie {
  _id: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  durationsMinutes: number;
  language: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetMoviesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Movie[];
}
