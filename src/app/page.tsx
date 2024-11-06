'use client'
import Typewriter from 'typewriter-effect';
import SnakeGame from '../components/game/SnakeGame';

export default function Home() {
  return (
    <main className="flex-1 flex justify-evenly items-center px-12">
      <div className="font-firaCode">
        <div className="text-link">
          <div className="text-lg">
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
          <div className="text-3xl">
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
          <div className="text-secondary-3 text-xl">
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
        <div className="mt-8 text-secondary-1">
          <div>{`// complete the game to continue`}</div>
          <div>{`// you can also see my repositories on my Github page`}</div>
          <div>
            <span className="text-secondary-3">const </span>
            <span className="text-accent-2">githubLink </span>
            <span className="text-secondary-4">= </span>
            <span className="text-accent-3">{`"https://github.com/NgocTruong0701"`}</span>
          </div>
        </div>
      </div>
      <div>
        <SnakeGame />
      </div>
    </main>
  );
}
