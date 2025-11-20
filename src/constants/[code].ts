import z from "zod";

export const addMovieSchema = z.object({
  movie_title: z
    .string()
    .min(1, "Movie title is required")
    .min(2, "Movie title must be at least 2 characters")
    .max(200, "Movie title must be less than 200 characters"),
  year: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\d{4}$/.test(val),
      "Year must be exactly 4 numbers"
    ),
});

export type AddMovieFormState = {
  errors?: {
    movie_title?: string[];
    year?: string[];
  };
  values?: {
    movie_title?: string;
    year?: string;
  };
  success?: boolean;
};

export const initialRoomIndexState: AddMovieFormState = {
  errors: undefined,
  values: undefined,
  success: false,
};
