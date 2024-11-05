'use client'
import { CanvasPostion, Direction, DIRECTIONS, GAME_SPEED, GRID_SIZE, INITIAL_FOOD_POSITION, INITIAL_SNAKE_POSITION } from '@/app/constants/snakeGame';
import React, { useState, useEffect, useRef } from 'react';

export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState<CanvasPostion[]>([{ x: 10, y: 10 }]);
    const [food, setFood] = useState<CanvasPostion>({ x: 15, y: 15 });
    const [direction, setDirection] = useState<Direction>(DIRECTIONS.RIGHT);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Generate random food postition
    const generateFood = () => {
        let newFood: CanvasPostion;
        let isOnSnake;

        do {
            newFood = {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20)
            };

            isOnSnake = snake.some(segment =>
                segment.x === newFood.x && segment.y === newFood.y
            );
        } while (isOnSnake);

        return newFood;
    };

    // Reset game state
    const resetGame = () => {
        setSnake(INITIAL_SNAKE_POSITION);
        setFood(INITIAL_FOOD_POSITION);
        setDirection(DIRECTIONS.RIGHT);
        setGameOver(false);
        setScore(0);
        setIsPlaying(true);
    }

    // Main game loop
    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const moveSnake = () => {
            setSnake(currentSnake => {
                const newSnake = [...currentSnake];
                const head = { ...newSnake[0] };

                switch (direction) {
                    case DIRECTIONS.UP:
                        head.y -= 1;
                        break;
                    case DIRECTIONS.DOWN:
                        head.y += 1;
                        break;
                    case DIRECTIONS.LEFT:
                        head.x -= 1;
                        break;
                    case DIRECTIONS.RIGHT:
                        head.x += 1;
                        break;
                }

                // Check wall collision
                if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return currentSnake;
                }

                // Check self collision
                if (newSnake.some(part => part.x === head.x && part.y === head.y)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return currentSnake;
                }

                // Check food collision
                if (head.x === food.x && head.y === food.y) {
                    setScore(s => s + 1);
                    setFood(generateFood());
                } else {
                    newSnake.pop();
                }

                newSnake.unshift(head);
                return newSnake;
            });
        };

        const gameInterval = setInterval(moveSnake, GAME_SPEED);
        return () => clearInterval(gameInterval);
    }, [direction, food, isPlaying, gameOver]);

    // Drawing logic
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        const drawGame = () => {
            // Clear canvas
            context.fillStyle = '#1a1a1a';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            context.strokeStyle = '#333';
            for (let i = 0; i < GRID_SIZE; i++) {
                context.beginPath();
                context.moveTo(i * 20, 0);
                context.lineTo(i * 20, 400);
                context.stroke();
                context.beginPath();
                context.moveTo(0, i * 20);
                context.lineTo(400, i * 20);
                context.stroke();
            };

            // Draw food
            context.fillStyle = '#22c55e';
            context.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

            // Draw snake
            snake.forEach((part, index) => {
                context.fillStyle = index === 0 ? '#60a5fa' : '#3b82f6';
                context.fillRect(part.x * GRID_SIZE, part.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            });
        };

        drawGame();
    }, [snake, food]);

    // Handle direction changes
    const changeDirection = (e: KeyboardEvent) => {
        if (!isPlaying) return;

        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') setDirection('UP');
                break;
            case 'ArrowDown':
                if (direction !== 'UP') setDirection('DOWN');
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') setDirection('LEFT');
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') setDirection('RIGHT');
                break;
            default:
                break;
        };
    };

    useEffect(() => {
        window.addEventListener('keydown', changeDirection);
        return () => window.removeEventListener('keydown', changeDirection);
    }, [direction, isPlaying]);

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-green-900 p-4 rounded-lg">
            <div className="mb-4 text-xl font-bold text-white">Score: {score}</div>
            <canvas ref={canvasRef} width="400" height="400" className="border-4 border-gray-800"></canvas>
            <button
                onClick={resetGame}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            >
                {isPlaying ? 'Restart Game' : 'Start Game'}
            </button>
            {gameOver && <p className="text-red-500 mt-2 font-bold">Game Over!</p>}
            <p className="text-gray-300 mt-4">Use arrow keys to play</p>
        </div>
    );
}