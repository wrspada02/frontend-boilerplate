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
              Movie Night Room
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
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}