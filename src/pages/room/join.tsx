import { Button } from "@/components/Button";
import { initialJoinRoomState, JoinRoomFormState, joinRoomSchema } from "@/constants/join";
import { addLayout } from "@/hoc/addLayout";
import Image from "next/image";
import { useActionState } from "react";

export default function JoinRoom() {
  async function handleSubmitForm(
    prevState: JoinRoomFormState,
    formData: FormData
  ): Promise<JoinRoomFormState> {
    const room_code = formData.get("room_code") as string;
    const user_name = formData.get("user_name") as string;

    const result = joinRoomSchema.safeParse({ room_code, user_name });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
        values: { room_code, user_name },
        success: false,
      };
    }

    // TODO: Implement actual room join logic here
    // For now, just return success
    return {
      errors: undefined,
      values: undefined,
      success: true,
    };
  }

  const [state, formAction, isPending] = useActionState(
    handleSubmitForm,
    initialJoinRoomState
  );

  return addLayout(
    <div className="w-[400px]">
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
        <h1 className="text-[#59168B] text-base leading-6 font-normal mb-6">Join a Room</h1>
        <form action={formAction}>
          <label htmlFor="room_code" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
            Room Code
          </label>
          <input
            type="text"
            id="room_code"
            name="room_code"
            placeholder="ENTER ROOM CODE"
            defaultValue={state.values?.room_code || ''}
            className={`p-4 w-full rounded-[10px] text-black border ${
              state.errors?.room_code
                ? 'border-red-500'
                : 'border-[#D1D5DC]'
            }`}
            disabled={isPending}
          />
          {state.errors?.room_code && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.room_code[0]}
            </p>
          )}
          <label htmlFor="user_name" className="text-[#364153] text-base leading-6 font-normal mt-6 mb-2.5 block">
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
            {isPending ? "Joining..." : "Join Room"}
          </Button>
        </form>
      </section>
    </div>
  )
}