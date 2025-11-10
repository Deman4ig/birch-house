import { leagueScript } from './fonts';

export default function Home() {
  return (
    <>
      <main className='relative min-h-screen bg-hero overlay'>
        <div className='relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center'>
          <span className='mt-4 text-base sm:text-large md:text-xl font-light drop-shadow-md'>
            The Birch House
          </span>
          <h1
            className={`${leagueScript.className} mt-4 text-6xl sm:text-7xl md:text-8xl drop-shadow-md`}
          >
            Coming Soon...
          </h1>
        </div>
      </main>
    </>
  );
}
