import { Point } from "./Point"

describe('Point testing', () => {
    let point: Point
    beforeEach(() => {
        point = new Point(1, 1);
    })

    it("Створення екземпляру класу", () => {
        expect(point).toBeTruthy();
    })
})