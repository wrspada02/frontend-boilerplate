import z from "zod";

export const joinRoomSchema = z.object({
  room_code: z
    .string()
    .min(1, "Room code is required")
    .min(4, "Room code must be at least 4 characters")
    .max(20, "Room code must be less than 20 characters"),
  user_name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
});

export type JoinRoomFormState = {
  errors?: {
    room_code?: string[];
    user_name?: string[];
  };
  values?: {
    room_code?: string;
    user_name?: string;
  };
  success?: boolean;
};

export const initialJoinRoomState: JoinRoomFormState = {
  errors: undefined,
  values: undefined,
  success: false,
};