export interface Triangle {



    move(dx: number, dy: number): void

    rotate(angle: number): void
    changeColor(color: string, context: CanvasRenderingContext2D): void
}