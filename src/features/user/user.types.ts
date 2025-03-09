export type UserState = {
  username: string;
  status: "idle" | "loading" | "error";
  position: any;
  address: string;
  error: string;
};
