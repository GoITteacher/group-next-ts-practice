export interface RegisterBody {
  email: string;
  name: string;
  password: string;
  typeAccount: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  typeAccount: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RefreshResponse {
  success: boolean;
}
