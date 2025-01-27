export type NewCourier = {
  id: number;
  number: number;
};

export type Courier = NewCourier & {
  name: string;
  points: number;
  penalties: number;
};

export type CourierWithPasswordHash = Courier & {
  password_hash: string;
};
