import { Button } from "@/components/Button";
import { addLayout } from "@/hoc/addLayout";
import Image from "next/image";

export default function CreateRoom() {
  return addLayout(
    <div className="max-w-[400px]">
      <header className="self-start">
        <Button
          className="flex items-center pl-0"
        >
          <Image
            src={'/return-back.svg'}
            width={20}
            height={20}
            alt="Arrow pointing to left side meaning user can return back to home page"
          />
          <span className="ml-2">Back</span>
        </Button>
      </header>

      <section className="bg-white rounded-[14px] p-8">
        <h1 className="text-[#59168B] text-base leading-6 font-normal mb-6">Create a Room</h1>
        <form action="">
          <label htmlFor="name" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
            Your Name
          </label>
          <input type="text" id="name" placeholder="Enter your name" className="p-4 w-full rounded-[10px] text-black border border-[#D1D5DC]" />
          <Button className="bg-[#9810FA] mt-6 h-[50px] py-3 px-6" type="submit">
            Create Room
          </Button>
        </form>

        <footer className="w-full p-4 mt-6 bg-[#FAF5FF] rounded-[10px]">
          <p className="w-full text-[#59168B] text-sm font-normal leading-5"><b>Note:</b> After creating the room, you'll receive a unique room code to share with your friends. As the host, you'll have control to finish the voting and draw the winning movie.</p>
        </footer>
      </section>
    </div>
  )
}