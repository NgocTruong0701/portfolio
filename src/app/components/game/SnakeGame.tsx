'use client'
import { CANVAS_HEIGHT, CANVAS_WIDTH, CanvasPosition, CELL_SIZE, Direction, DIRECTIONS, GAME_SPEED, GRID_COLS, GRID_ROWS, INITIAL_FOOD_POSITION, INITIAL_SNAKE_POSITION } from '@/app/constants/snakeGame';
import React, { useState, useEffect, useRef } from 'react';

export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState<CanvasPosition[]>(INITIAL_SNAKE_POSITION);
    const [food, setFood] = useState<CanvasPosition>(INITIAL_FOOD_POSITION);
    const [direction, setDirection] = useState<Direction>(DIRECTIONS.RIGHT);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Generate random food postition
    const generateFood = () => {
        let newFood: CanvasPosition;
        let isOnSnake;

        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_COLS),
                y: Math.floor(Math.random() * GRID_ROWS)
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
                if (head.x < 0 || head.x >= GRID_COLS || head.y < 0 || head.y >= GRID_ROWS) {
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
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'rgba(1, 22, 39, 0.84)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // // Draw grid
            // context.strokeStyle = '#333';
            // // draw cols
            // for (let i = 0; i <= GRID_COLS; i++) {
            //     context.beginPath();
            //     context.moveTo(i * CELL_SIZE, 0);
            //     context.lineTo(i * CELL_SIZE, CANVAS_HEIGHT);
            //     context.stroke();
            // }
            // // draw cels
            // for (let i = 0; i <= GRID_ROWS; i++) {
            //     context.beginPath();
            //     context.moveTo(0, i * CELL_SIZE);
            //     context.lineTo(CANVAS_WIDTH, i * CELL_SIZE);
            //     context.stroke();
            // }

            // 2. Reset context state
            context.globalAlpha = 1;
            context.shadowColor = 'none';
            context.shadowBlur = 0;

            // 3. Draw snake
            snake.forEach((part, index) => {
                const opacity = 1 - (index / (snake.length - 1)) * 0.9;
                const color = index === 0 ? '#43D9AD' : `rgba(67, 217, 173, ${opacity})`;
                context.fillStyle = color;
                context.beginPath();
                context.roundRect(
                    part.x * CELL_SIZE,
                    part.y * CELL_SIZE,
                    CELL_SIZE,
                    CELL_SIZE,
                    8
                );
                context.fill();
            });

            // 4. Draw food - với state mới hoàn toàn
            context.save();
            const centerX = food.x * CELL_SIZE + CELL_SIZE / 2; // need multi with size 1 cell to convert grid coordinates (x,y) to canvas pixel coordinates (x * CELL_SIZE, y * CELL_SIZE)
            const centerY = food.y * CELL_SIZE + CELL_SIZE / 2;
            const radius = CELL_SIZE / 3;

            // Vẽ food với state mới
            context.fillStyle = '#FF5370';
            context.shadowColor = '#FF5370';
            context.shadowBlur = 15;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.fill();
            context.restore();
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
        <div className="flex items-center justify-between h-max bg-gradient-to-r from-gradient-deep-teal/70 to-gradient-green/70 rounded-lg p-5 font-firaCode">
            <div className='pr-6 relative'>
                <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="rounded-lg shadow-xl shadow-black/30"></canvas>
                {!isPlaying && (<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={resetGame}
                        className="mt-4 bg-accent-1 hover:bg-orange-600 text-secondary-5 px-4 py-2 rounded-lg transition-colors }"
                    >
                        {gameOver ? 'Restart Game' : 'Start Game'}
                    </button>
                </div>)}
            </div>
            <div>
                <div className="mb-4 text-xl font-bold text-white">Score: {score}</div>
                {gameOver && <p className="text-red-500 mt-2 font-bold">Game Over!</p>}
                <p className="text-gray-300 mt-4">Use arrow keys to play</p>
            </div>
        </div>
    );
}