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
};

type DocumentData = {
  documentId: number;
  link: string;
  title: string;
  type: string;
};

type ResourceData = {
  resourceId: number;
  link: string;
  title: string;
  type: string;
};

type EventData = {
  id: number,
  eventType: string,
  title: string,
  eventImageDtoResponse: {
    id: number,
    title: string,
    type: string,
    link: string
  },
};

type EventDataBig = {
  id: number;
  eventDate: string;
  startTime: string;
  endTime: string;
  description: string;
  eventType: string;
  location: string;
  title: string;
  isGrandFinalEvent: boolean;
  eventImageDtoResponse: {
    id: number;
    title: string;
    type: string;
    link: string;
  };
  directionSet: [
    {
      direction: string;
    }
  ];
};

type ApplyEvent = {
  name: string;
  lastName: string;
  surName: string;
  phone: string;
  email: string;
  address: string;
  birthday: string;
  gender: string;
  typeOfSelection: string;
  linkList: string[];
  directionEnumList: string[];
};
