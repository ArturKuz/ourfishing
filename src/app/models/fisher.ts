export interface Fisher {
  avatarUrl?: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  phoneNumber: string;
}

export interface UpdateFisher {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
