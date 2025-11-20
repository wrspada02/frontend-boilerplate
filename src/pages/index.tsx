import { Button } from "@/components/Button";

export default function Home() {
  const footerTexts = [
    'Create or join a room',
    'Everyone adds movie suggestions',
    'Vote with upvotes & downvotes',
    'Host locks and draws a random winner'
  ]

  return (
    <main className="bg-gradient-to-br from-[#59168B] via-[#6E11B0] to-[#312C85] w-screen h-screen flex flex-col items-center p-8">
      <header className="max-w-[400px]">
        <h1 className="text-center text-2xl text-white font-medium leading-9">🎬 Movie Night</h1>
        <p className="text-center text-base text-white font-normal leading-6 mt-4">Create a room, invite friends, vote on movies, and let fate decide!</p>
      </header>

      <section className="max-w-[400px] w-full mt-12">
          <Button
            text="Create a Room"
            classNames="bg-white text-[#59168B]"
          />
          <Button
            text="Join a Room"
            classNames="text-white bg-[#AD46FF] border border-solid border-[#8200DB] mt-4"
          />
      </section>

      <footer className="max-w-[400px] w-full p-4 mt-12 rounded-sm bg-[#6E11B080]">
        <h2 className="text-white font-bold text-sm leading-5">How it works:</h2>
        <ul className="list-none mt-2.5">
          {footerTexts.map((text, index) => (
            <li 
              key={index} 
              className="text-[#F3E8FF] text-sm mt-1.5 font-normal leading-5 ml-4"
            >
              {text}
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}
