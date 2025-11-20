import { Button } from "@/components/Button";
import { addLayout } from "@/hoc/addLayout";
import Image from "next/image";

export default function JoinRoom() {
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
        <h1 className="text-[#59168B] text-base leading-6 font-normal mb-6">Join a Room</h1>
        <form action="">
        <label htmlFor="name" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
            Room Code
          </label>
          <input type="text" id="name" placeholder="ENTER ROOM CODE" className="p-4 w-full rounded-[10px] text-black border border-[#D1D5DC] mb-6" />
          <label htmlFor="name" className="text-[#364153] text-base leading-6 font-normal mb-2.5 block">
            Your Name
          </label>
          <input type="text" id="name" placeholder="Enter your name" className="p-4 w-full rounded-[10px] text-black border border-[#D1D5DC]" />
          <Button className="bg-[#9810FA] mt-6 h-[50px] py-3 px-6" type="submit">
            Join Room
          </Button>
        </form>
      </section>
    </div>
  )
}