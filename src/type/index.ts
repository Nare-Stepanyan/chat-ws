export type User = {
  id?: string | null;
  name: string;
  age: number | null;
};

export type Message = {
  id: string;
  userName: string;
  message: string;
  date: string;
};
