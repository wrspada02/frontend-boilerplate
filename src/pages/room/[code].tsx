import { Button } from "@/components/Button";
import { addLayout } from "@/hoc/addLayout";
import Image from "next/image";

export default function Room() {
  return addLayout(
    <ul className="list-none w-[900px] max-w-screen">
      <li className="w-full rounded-[14px] bg-white p-6">
        <section>
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
            <span className="text-sm text-[#8200DB] font-normal leading-6 px-2 py-0.5 rounded-sm bg-[#F3E8FF]">
              Host
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-4">
              <p className="text-[#4A5565] mb-1">Share this code:</p>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-[#F3F4F6] text-[#59168B] text-base rounded-[10px]">JST0Z5</span>
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
      <li className="w-full rounded-[14px] bg-white p-6 mt-6">
        <Button className="bg-[#9810FA]">
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