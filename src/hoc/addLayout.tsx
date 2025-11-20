export function addLayout(children: React.ReactNode) {
  return (
    <main className="bg-gradient-to-br from-[#59168B] via-[#6E11B0] to-[#312C85] w-screen h-screen flex flex-col items-center overflow-y-auto p-8">
      {children}
    </main>
  )
}