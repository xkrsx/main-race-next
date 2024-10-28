type Courier = {
  id: number;
  number: number;
  name: string;
  points: number;
  penalties: number;
};

type CourierWithPasswordHash = Courier & {
  password_hash: string;
};
