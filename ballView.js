export class BallView {
    constructor(field, model) {
        let _field = field,
            _model = model;

        this.getField = function () {
            return _field;
        }

        this.getModel = function () {
            return _model;
        }
    }

    getElement() {
        let model = this.getModel(),
            x = model.getX(),
            y = model.getY(),
            radius = model.getRadius(),
            element = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

        element.setAttribute("cx", x);
        element.setAttribute("cy", y);
        element.setAttribute("r", radius);

        return element;
    }

    draw() {
        let field = this.getField(),
            element = this.getElement();

        field.append(element);
    }

}