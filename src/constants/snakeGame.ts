export const CANVAS_WIDTH = 250; // width size canvas
export const CANVAS_HEIGHT = 450; // heght size canvas
export const CELL_SIZE = 25; // size of cell
export const GRID_COLS = Math.floor(CANVAS_WIDTH / CELL_SIZE);
export const GRID_ROWS = Math.floor(CANVAS_HEIGHT / CELL_SIZE);
export type CanvasPosition = {
    x: number,
    y: number
}

export const GAME_SPEED = 120;

export const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
} as const;

export type Direction = typeof DIRECTIONS[keyof typeof DIRECTIONS];

export const CONTROL_KEYS = {
    UP: ['ArrowUp', 'KeyW'],
    DOWN: ['ArrowDown', 'KeyS'],
    LEFT: ['ArrowLeft', 'KeyA'],
    RIGHT: ['ArrowRight', 'KeyD'],
    START: ['Space'],
    PAUSE: ['KeyP']
} as const;

export const INITIAL_SNAKE_POSITION: CanvasPosition[] = [
    { x: Math.floor(GRID_COLS / 2), y: Math.floor(GRID_ROWS / 2) }
];

export const INITIAL_FOOD_POSITION: CanvasPosition = {
    x: Math.floor(GRID_COLS / 3),
    y: Math.floor(GRID_ROWS / 3)
};

export interface GameState {
    snake: CanvasPosition[];
    food: CanvasPosition;
    score: number;
}
