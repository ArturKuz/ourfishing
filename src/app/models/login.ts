export interface Login {
  token: {
    authToken: string;
    expiresIn: number;
    id: string;
  };
}
