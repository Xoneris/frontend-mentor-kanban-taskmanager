"use server"

export default async function Home() {

  return (
    
      <>
        <header className="h-24 bg-white flex justify-between items-center border-b border-gray-200 dark:bg-darkGrey dark:border-gray-700 dark:text-white transition-all">
          <p className="pl-6 text-black heading-xl dark:text-white">Home</p>
        </header>
        <section className="bg-lightGrey grow flex flex-col justify-center items-center gap-8 dark:bg-veryDarkGrey transition-all">
          Page
        </section>
      </>
      
  );
}
