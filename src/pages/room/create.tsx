import { Button } from "@/components/Button";
import { CreateRoomFormState, createRoomSchema, initialCreateRoomState } from "@/constants/create";
import { addLayout } from "@/hoc/addLayout";
import Image from "next/image";
import { useActionState } from "react";
import { z } from "zod";

export default function CreateRoom() {
  async function handleSubmitForm(
    prevState: CreateRoomFormState,
    formData: FormData
  ): Promise<CreateRoomFormState> {
    const user_name = formData.get("user_name") as string;

    const result = createRoomSchema.safeParse({ user_name });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
        values: { user_name },
        success: false,
      };
    }

    // TODO: Implement actual room creation logic here
    // For now, just return success
    return {
      errors: undefined,
      values: undefined,
      success: true,
    };
  }

  const [state, formAction, isPending] = useActionState(
    handleSubmitForm,
    initialCreateRoomState
  );

  return addLayout(
    <div className="max-w-[400px]">
      <header className="self-start">
        <Button.Link
          href={'/'}
          className="flex items-center pl-0"
        >
          <Image
            src={'/return-back.svg'}
            width={20}
            height={20}
            alt="Arrow pointing to left side meaning user can return back to home page"
          />
          <span className="ml-2">Back</span>
        </Button.Link>
      </header>

      <section className="bg-white rounded-[14px] p-8">
        <h1 className="text-[#59168B] text-base leading-6 font-normal mb-6">Create a Room</h1>
        <form action={formAction}>
          <label htmlFor="user_name" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
            Your Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Enter your name"
            defaultValue={state.values?.user_name || ''}
            className={`p-4 w-full rounded-[10px] text-black border ${
              state.errors?.user_name
                ? 'border-red-500'
                : 'border-[#D1D5DC]'
            }`}
            disabled={isPending}
          />
          {state.errors?.user_name && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.user_name[0]}
            </p>
          )}
          <Button
            className="bg-[#9810FA] mt-6 h-[50px] py-3 px-6"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Room"}
          </Button>
        </form>

        <footer className="w-full p-4 mt-6 bg-[#FAF5FF] rounded-[10px]">
          <p className="w-full text-[#59168B] text-sm font-normal leading-5"><b>Note:</b> After creating the room, you'll receive a unique room code to share with your friends. As the host, you'll have control to finish the voting and draw the winning movie.</p>
        </footer>
      </section>
    </div>
  )
}