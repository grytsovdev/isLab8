import { ConcreteTriangle } from "./ConcreteTriangle";


describe('Triangle Testing', () => {
    let triangle: ConcreteTriangle;
    beforeEach(() => {
        triangle = new ConcreteTriangle();
    })

    it("Створення екземпляру класу", () => {
        expect(triangle).toBeTruthy();
    })
    it("метод для пересування", () => {
        let points = triangle.getPoints();
        let p1 = points.p1.getX()
        triangle.move(5, 5)
        let newPoint = triangle.getPoints();
        let newp1 = newPoint.p1.getX();


        expect(p1 + 5).toBe(newp1)
    })

    it("метод для обертаня", () => {
        triangle.setP1(150, 300)
        triangle.setP2(300, 300)
        triangle.setP3(150, 80)

        triangle.rotate(50)
        let newPoint = triangle.getPoints();
        let newp1 = newPoint.p1.getX();


        expect(parseFloat(newp1.toFixed(2))).toEqual(111.68)
    })

    it("метод для зміни кольору", () => {
        let color = 'red'
        triangle.changeColor(color)


        expect(triangle.getColor()).toEqual(color)
    })

})