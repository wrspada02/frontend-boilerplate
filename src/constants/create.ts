import z from "zod";

export const createRoomSchema = z.object({
  user_name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
});

export type CreateRoomFormState = {
  errors?: {
    user_name?: string[];
  };
  values?: {
    user_name?: string;
  };
  success?: boolean;
};

export const initialCreateRoomState: CreateRoomFormState = {
  errors: undefined,
  values: undefined,
  success: false,
};