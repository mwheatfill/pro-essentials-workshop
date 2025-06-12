import { Extends, Expect } from "@total-typescript/helpers";

type Entity = {
  id: string;
  createdAt: Date;
};

type User = Entity & {
  name: string;
  email: string;
};

type Product = Entity & {
  name: string;
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
