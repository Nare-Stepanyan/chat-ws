export type User = {
  id?: string | null;
  name: string;
};

export type Message = {
  id: string;
  userName: string;
  message: string;
  date: string;
};
