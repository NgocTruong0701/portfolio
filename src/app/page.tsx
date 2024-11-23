'use client'
import Typewriter from 'typewriter-effect';
import SnakeGame from '../components/game/SnakeGame';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="
      flex-1 
      min-h-full
      flex 
      flex-col
      md:flex-row 
      justify-center
      md:justify-evenly 
      items-center 
      px-6
      md:px-12
      py-8
      md:py-0
    "
    >
      <div className="font-firaCode max-md:space-y-60">
        <div className="text-link">
          <div className="text-xl md:text-lg max-md:mb-3 md:mb-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hi all 👋. I am')
                  .start();
              }}
              options={{
                loop: false,
                autoStart: true,
              }}
            />
          </div>
          <div className="md:mb-2 max-md:mb-3 text-6xl md:text-3xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .typeString('Le Ngoc Truong')
                  .start();
              }}
              options={{
                loop: false,
                autoStart: true,
              }}
            />
          </div>
          <div className="text-accent-2 md:text-secondary-3 text-xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5000)
                  .typeString('> Software Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('> Backend Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('> Frontend Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                autoStart: true,
              }}
            />
          </div>
        </div>
        <div className="md:mt-24 text-secondary-1">
          <div className='hidden md:block md:mb-2'>{`// complete the game to continue`}</div>
          <div className='hidden md:block md:mb-2'>{`// you can also see my repositories on my Github page`}</div>
          <div className='md:hidden mb-4'>{`// find my profile on Github:`}</div>
          <div>
            <span className="text-secondary-3">const </span>
            <span className="text-accent-2">githubLink </span>
            <span className="text-secondary-4">= </span>
            <Link className="text-accent-3" href="https://github.com/NgocTruong0701" target="_blank">{`"https://github.com/NgocTruong0701"`}</Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <SnakeGame />
      </div>
    </div>
  );
}
