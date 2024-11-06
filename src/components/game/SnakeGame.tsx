'use client'
import { CANVAS_HEIGHT, CANVAS_WIDTH, CanvasPosition, CELL_SIZE, Direction, DIRECTIONS, GAME_SPEED, GameState, GRID_COLS, GRID_ROWS, INITIAL_FOOD_POSITION, INITIAL_SNAKE_POSITION } from '@/constants/snakeGame';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '../icons';

export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<GameState>({
        snake: INITIAL_SNAKE_POSITION,
        food: INITIAL_FOOD_POSITION,
        score: 0
    });
    const [direction, setDirection] = useState<Direction>(DIRECTIONS.RIGHT);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [isDone, setIsDone] = useState(false);

    // Generate random food postition
    // const generateFood = () => {
    //     let newFood: CanvasPosition;
    //     let isOnSnake;

    //     do {
    //         newFood = {
    //             x: Math.floor(Math.random() * GRID_COLS),
    //             y: Math.floor(Math.random() * GRID_ROWS)
    //         };

    //         isOnSnake = gameState.snake.some(segment =>
    //             segment.x === newFood.x && segment.y === newFood.y
    //         );
    //     } while (isOnSnake);

    //     return newFood;
    // };

    const generateFood = (currentSnake: CanvasPosition[]) => {
        // Create array of all possible positions
        const allPositions: CanvasPosition[] = [];
        for (let x = 0; x < GRID_COLS; x++) {
            for (let y = 0; y < GRID_ROWS; y++) {
                allPositions.push({ x, y });
            }
        }

        // Filter out positions occupied by snake
        const availablePositions = allPositions.filter(pos =>
            !currentSnake.some(segment =>
                segment.x === pos.x && segment.y === pos.y
            )
        );

        // Randomly select from available positions
        const randomIndex = Math.floor(Math.random() * availablePositions.length);
        return availablePositions[randomIndex];
    };

    // Reset game state
    const resetGame = () => {
        setGameState({
            snake: INITIAL_SNAKE_POSITION,
            food: INITIAL_FOOD_POSITION,
            score: 0
        });
        setDirection(DIRECTIONS.RIGHT);
        setGameOver(false);
        setIsPlaying(true);
        setIsFirstTime(false);
        setIsDone(false);
    }

    // Handle skip
    const skipHandler = useCallback(() => {
        if (!gameOver) {
            setIsDone(true);
            setIsFirstTime(false);
            setIsPlaying(false);
            setGameOver(true);
        }
    }, [gameOver]);

    // Main game loop
    const moveSnake = useCallback(() => {
        setGameState(prevState => {
            const newSnake = [...prevState.snake];
            const head = { ...newSnake[0] };

            // Direction logic
            switch (direction) {
                case DIRECTIONS.UP: head.y -= 1; break;
                case DIRECTIONS.DOWN: head.y += 1; break;
                case DIRECTIONS.LEFT: head.x -= 1; break;
                case DIRECTIONS.RIGHT: head.x += 1; break;
            }

            // Check wall collision
            if (head.x < 0 || head.x >= GRID_COLS || head.y < 0 || head.y >= GRID_ROWS) {
                setGameOver(true);
                setIsPlaying(false);
                return prevState;
            }

            // Check self collision
            if (newSnake.some(part => part.x === head.x && part.y === head.y)) {
                setGameOver(true);
                setIsPlaying(false);
                return prevState;
            }

            // Food collision
            if (head.x === prevState.food.x && head.y === prevState.food.y) {
                const newScore = prevState.score + 1;

                // Check win condition
                if (newScore >= GRID_ROWS * GRID_COLS) {
                    skipHandler();
                }

                return {
                    snake: [head, ...newSnake],
                    food: generateFood([head, ...newSnake]),
                    score: newScore
                };
            }
            newSnake.pop();
            newSnake.unshift(head);
            return {
                ...prevState,
                snake: newSnake
            };
        });
    }, [direction, skipHandler]);

    // Game loop
    useEffect(() => {
        if (!isPlaying || gameOver) return;
        const gameInterval = setInterval(moveSnake, GAME_SPEED);
        return () => clearInterval(gameInterval);
    }, [isPlaying, gameOver, moveSnake]);

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
            gameState.snake.forEach((part, index) => {
                const opacity = 1 - (index / (gameState.snake.length - 1)) * 0.9;
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
            const centerX = gameState.food.x * CELL_SIZE + CELL_SIZE / 2; // need multi with size 1 cell to convert grid coordinates (x,y) to canvas pixel coordinates (x * CELL_SIZE, y * CELL_SIZE)
            const centerY = gameState.food.y * CELL_SIZE + CELL_SIZE / 2;
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
    }, [gameState]);

    // Handle direction changes
    const changeDirection = useCallback((e: KeyboardEvent) => {
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
    }, [isPlaying, direction]);

    useEffect(() => {
        window.addEventListener('keydown', changeDirection);
        return () => window.removeEventListener('keydown', changeDirection);
    }, [direction, isPlaying, changeDirection]);

    return (
        <div className="flex items-center justify-between h-max bg-gradient-to-r from-gradient-deep-teal/70 to-gradient-green/70 rounded-lg p-5 font-firaCode">
            <div className='pr-6 relative'>
                <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="rounded-lg shadow-xl shadow-black/30"></canvas>
                {isFirstTime && (<div className="absolute bottom-8 left-1/2 transform -translate-x-[60%]">
                    <button
                        onClick={resetGame}
                        className="mt-4 bg-accent-1 hover:bg-orange-600 text-secondary-5 px-4 py-2 rounded-lg transition-colors"
                    >
                        start-game
                    </button>
                </div>)}
                {gameOver && (<div className="absolute bottom-6 left-1/2 transform -translate-x-[60%]">
                    <div
                        className="mt-4 bg-primary-2 text-accent-2 px-4 py-2 rounded-lg transition-colors text-center text-xl"
                    >
                        {isDone ? "WELL DONE!" : "GAME OVER!"}
                    </div>
                    <button
                        onClick={resetGame}
                        className="mt-2 w-40 text-center hover:bg-primary-2 hover:text-link text-secondary-1 px-4 py-2 rounded-lg transition-colors"
                    >
                        start-again
                    </button>
                </div>)}
            </div>
            <div className='flex flex-col gap-44'>
                <div className="font-firaCode">
                    <div className='bg-[#011423] bg-opacity-[0.19] rounded-lg p-4 flex items-center flex-col'>
                        <div>
                            <div className="text-secondary-4">{`// use keyboard`}</div>
                            <div className="text-secondary-4">{`// arrows to play`}</div>
                        </div>
                        <div className="w-fit max-w-[200px] grid grid-cols-3 gap-2 mt-5">
                            <div className="col-start-2">
                                <div className="bg-primary-1 rounded-lg p-2">
                                    <Icon name="ArrowUpFill" fill="white" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-center gap-2">
                                <div className="bg-primary-1 rounded-lg p-2">
                                    <Icon name="ArrowLeftFill" fill="white" className="w-full h-full" />
                                </div>
                                <div className="bg-primary-1 rounded-lg p-2">
                                    <Icon name="ArrowDownFill" fill="white" className="w-full h-full" />
                                </div>
                                <div className="bg-primary-1 rounded-lg p-2">
                                    <Icon name="ArrowRightFill" fill="white" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className="text-secondary-4">{`// score: ${gameState.score}`}</div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={skipHandler}
                        className='float-right border border-secondary-4 text-secondary-4 py-2 px-4 rounded-xl w-[62px] h-[38px] flex items-center justify-center'
                    >
                        skip
                    </button>
                </div>
            </div>
        </div>
    );
}