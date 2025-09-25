import { leagueScript } from './fonts';

export default function Home() {
  return (
    <>
      <main className='relative min-h-screen bg-hero overlay text-white'>
        <div className='relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center'>
          <span className='mt-4 text-white/90 text-base sm:text-large md:text-xl font-light drop-shadow-md'>
            The Birch House
          </span>
          <h1
            className={`${leagueScript.className} mt-4 text-white text-6xl sm:text-7xl md:text-8xl drop-shadow-md`}
          >
            Coming Soon...
          </h1>
        </div>
      </main>
      <footer className='pointer-events-none absolute inset-x-0 bottom-0 z-10 mb-6 w-full px-4'>
        <div
          className='mx-auto max-w-6xl flex justify-center flex-col items-center text-center
                    text-white/90 sm:text-large md:text-xl drop-shadow-md text-base font-light tracking-wide text-center'
        >
          <span></span>
          <span>White Mountains, NH by Everstay</span>
        </div>
      </footer>
    </>
  );
}
