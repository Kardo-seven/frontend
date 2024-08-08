type UserProfile = {
  id: number;
  name: string;
  lastName: string;
  surName: string;
  phone: string;
  birthday: string;
  gender: string;
  country: string;
  region: string;
  city: string;
  citizenship: string;
  avatarId: number;
  userId: number;
};

type UserPersonalData = {
  name: string;
  surName: string;
  lastName: string;
  birthday: string;
  gender: string;
  country: string;
  region: string;
  city: string;
  citizenship: string;
  socialLink: string;
  phone: string;
  email: string;
  password: string;
  newPassword?: string;
};