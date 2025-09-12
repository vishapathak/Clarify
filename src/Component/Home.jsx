export default function Home() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-10 pt-12">
      <section className="w-full lg:w-[70%] p-4 lg:p-24">
        <h1 className="text-3xl lg:text-5xl font-bold">Tired of Accounting Confusions?</h1>
        <p className="py-8 w-[80%] text-justify">
          Your one step solution to resolve all accounting problems and
          resolution of all traditional ladger based confusions and records
          keeping of sales .
        </p>
        <button className="border-2 border-black rounded-xl px-4 py-2 mt-24 text-lg">Get Started</button>
      </section>
      <section className="w-full lg:w-[30%] lg:pr-12" >
        <img src="/image/Hero_section.jpg" alt="" />
      </section>
    </main>
  );
}
