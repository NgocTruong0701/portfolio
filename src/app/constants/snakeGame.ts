export const CANVAS_SIZE = 400;
export const GRID_SIZE = 20;
export const CELL_SIZE = CANVAS_SIZE / GRID_SIZE;
export type CanvasPostion = {
    x: number,
    y: number
}

export const GAME_SPEED = 100;

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

export const INITIAL_SNAKE_POSITION: CanvasPostion[] = [{ x: 10, y: 10 }];

export const INITIAL_FOOD_POSITION: CanvasPostion = { x: 15, y: 15 };
