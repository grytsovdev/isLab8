import { Point } from "./Point";
import { Triangle } from "./Triangle";
export class ConcreteTriangle implements Triangle {
    private p1: Point = new Point(0, 0)
    private p2: Point = new Point(0, 0)
    private p3: Point = new Point(0, 0)
    private color: string = 'black'


    constructor() {

    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.strokeStyle = this.color
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.lineTo(this.p3.x, this.p3.y);
        context.closePath();

        context.stroke();

    }

    move(dx: number, dy: number): void {
        this.p1.x += dx;
        this.p1.y += dy;
        this.p2.x += dx;
        this.p2.y += dy;
        this.p3.x += dx;
        this.p3.y += dy;
    }

    changeSize(scaleX: number, scaleY: number): void {
        this.p1.x *= scaleX;
        this.p1.y *= scaleY;
        this.p2.x *= scaleX;
        this.p2.y *= scaleY;
        this.p3.x *= scaleX;
        this.p3.y *= scaleY;
    }

    rotate(angle: number): void {
        const angleInRadians = (angle * Math.PI) / 180;
        const centerX = (this.p1.x + this.p2.x + this.p3.x) / 3;
        const centerY = (this.p1.y + this.p2.y + this.p3.y) / 3;

        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);

        const rotatePoint = (point: Point) => {
            const translatedX = point.x - centerX;
            const translatedY = point.y - centerY;

            const rotatedX = translatedX * cos - translatedY * sin;
            const rotatedY = translatedX * sin + translatedY * cos;

            point.x = rotatedX + centerX;
            point.y = rotatedY + centerY;
        };

        rotatePoint(this.p1);
        rotatePoint(this.p2);
        rotatePoint(this.p3);
    }

    changeColor(color: string): void {

        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setP1(x: number, y: number) {
        this.p1 = new Point(x, y)
    }
    setP2(x: number, y: number) {
        this.p2 = new Point(x, y)
    }
    setP3(x: number, y: number) {
        this.p3 = new Point(x, y)
    }
    getPoints() {
        return {
            p1: this.p1, p2: this.p2, p3: this.p3
        }
    }
}