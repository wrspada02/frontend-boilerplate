import { Button } from "@/components/Button";
import { addLayout } from "@/hoc/addLayout";
import { getToken } from "@/utils/getToken";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useActionState, useEffect } from "react";
import { z } from "zod";

const addMovieSchema = z.object({
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

type AddMovieFormState = {
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

const initialState: AddMovieFormState = {
  errors: undefined,
  values: undefined,
  success: false,
};

export default function Room() {
  const params = useParams<{ code: string }>()
  const [isOpenMovieForm, setIsOpenMovieForm] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(getToken())
  }, [])

  async function handleSubmitForm(
    prevState: AddMovieFormState,
    formData: FormData
  ): Promise<AddMovieFormState> {
    const movie_title = formData.get("movie_title") as string;
    const year = formData.get("year") as string | null;

    const result = addMovieSchema.safeParse({
      movie_title,
      year: year || undefined,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
        values: { movie_title, year: year || undefined },
        success: false,
      };
    }

    // TODO: Implement actual movie addition logic here
    // For now, just return success
    return {
      errors: undefined,
      values: undefined,
      success: true,
    };
  }

  const [state, formAction, isPending] = useActionState(
    handleSubmitForm,
    initialState
  );

  // Close form on successful submission
  useEffect(() => {
    if (state.success) {
      setIsOpenMovieForm(false);
    }
  }, [state.success]);

  return addLayout(
    <ul className="list-none w-[900px] max-w-screen">
      <li className="w-full rounded-[14px] bg-white p-6">
        <section>
          <div className="flex justify-between">
            <figure className="flex items-center gap-2">
              <Image 
                src={'/movie.svg'}
                width={20}
                height={20}
                alt="Movie icon"
              />
              <figcaption className="ml-3 text-base text-[#59168B] font-normal leading-6">
                <h1>Movie Night Room</h1>
              </figcaption>
            </figure>

            {token ? null : (
              <Button.Link
                href={'/'}
                className="!w-fit"
              >
                <figure className="flex items-center gap-2">
                  <Image
                    src={'/leave.svg'}
                    alt="Leave icon"
                    width={20}
                    height={20}
                  />
                  <figcaption className="text-[#4A5565] text-base leading-6">Leave</figcaption>
                </figure>
              </Button.Link>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Image 
              src={'/user.svg'}
              width={20}
              height={20}
              alt="User icon"
            />
            <span className="text-base text-[#59168B] font-normal leading-6">
              Teste da Silva
            </span>
            {token ? (
              <span className="text-sm text-[#8200DB] font-normal leading-6 px-2 py-0.5 rounded-sm bg-[#F3E8FF]">
                Host
              </span>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-4">
              <p className="text-[#4A5565] mb-1">Share this code:</p>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-[#F3F4F6] text-[#59168B] text-base rounded-[10px]">{params?.code}</span>
                <button>
                  <figure className="flex items-center gap-2 bg-[#F3E8FF] text-[#8200DB] text-base px-4 py-2 rounded-[10px]">
                    <Image
                      src={'/copy.svg'}
                      alt="Copy icon"
                      width={20}
                      height={20}
                    />
                    <figcaption>Copy</figcaption>
                  </figure>
                </button>
              </div>
            </div>

            <figure className="flex items-center gap-2 bg-[#DCFCE7] text-[#008236] text-base px-4 py-2 rounded-[10px]">
              <Image
                src={'/lock.svg'}
                alt="Lock icon"
                height={20}
                width={20}
              />
              <figcaption>Open</figcaption>
            </figure>
          </div>
        </section>
      </li>
      {token ? (
        <li className="w-full rounded-[14px] bg-white p-6 mt-6">
          <section>
            <h2 className="text-[#101828] text-base leading-6">Host Controls</h2>

            <Button className="bg-[#9810FA] rounded-[10px] max-w-[240px] h-[50px] mt-4">
              <figure className="flex items-center gap-2">
                <Image
                  src={"/flag.svg"}
                  alt="Flag icon"
                  width={20}
                  height={20}
                />
                <figcaption className="text-white text-base font-normal leading-6">Finish & Draw Winner</figcaption>
              </figure>
            </Button>

            <p className="text-sm text-[#4A5565] leading-5 mt-4">Lock the room and automatically draw a random winner. You must finish the room before you can leave.</p>
          </section>
        </li>
      ) : null}
      <li className="w-full rounded-[14px] bg-white p-6 mt-6">
        {isOpenMovieForm ? (
          <form action={formAction}>
            <label htmlFor="movie_title" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
              Movie Title *
            </label>
            <input
              type="text"
              id="movie_title"
              name="movie_title"
              placeholder="e.g. Inception"
              defaultValue={state.values?.movie_title || ''}
              className={`p-4 w-full rounded-[10px] text-black border ${
                state.errors?.movie_title
                  ? 'border-red-500'
                  : 'border-[#D1D5DC]'
              }`}
              disabled={isPending}
            />
            {state.errors?.movie_title && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.movie_title[0]}
              </p>
            )}

            <label htmlFor="year" className="text-[#364153] text-base leading-6 font-normal mt-4 mb-2.5 block">
              Year (Optional)
            </label>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="e.g. 2010"
              defaultValue={state.values?.year || ''}
              className={`p-4 w-full rounded-[10px] text-black border ${
                state.errors?.year
                  ? 'border-red-500'
                  : 'border-[#D1D5DC]'
              }`}
              disabled={isPending}
            />
            {state.errors?.year && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.year[0]}
              </p>
            )}

            <footer className="flex items-center gap-3">
              <Button
                className="bg-[#9810FA] mt-6 h-[50px] text-justify py-3 px-6"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add Movie"}
              </Button>
              <Button 
                className="bg-[#E5E7EB] text-[#364153] max-w-[100px] mt-6 h-[50px] py-3 px-6"
                type="button"
                onClick={() => {
                  setIsOpenMovieForm(false)
                }}
                disabled={isPending}
              >
                Cancel
              </Button>
            </footer>
          </form>
        ): (
          <Button 
            className="bg-[#9810FA]" 
            onClick={() => {
              setIsOpenMovieForm(true)
            }}
          >
            <figure className="flex items-center justify-center gap-2">
              <Image
                src={"/add.svg"}
                alt="Add icon"
                width={20}
                height={20}
              />
              <figcaption className="text-white text-base font-normal leading-6">Add a Movie</figcaption>
            </figure>
          </Button>
        )}
      </li>
      <li className="w-full rounded-[14px] bg-white p-6 mt-6">
        <h3 className="text-lg text-[#101828] leading-7 font-medium">Movies (0)</h3>

        <p className="bg-[#6E11B04D] text-[#E9D4FF] h-[125px] rounded-[10px] flex items-center justify-center mt-4">
          No movies yet. Be the first to add one!
        </p>
      </li>
    </ul>
  )
}