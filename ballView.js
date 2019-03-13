export class BallView {
    constructor() {
        let _field,
            _model;
    }

    start(model, field) {
        this._field = field,
            this._model = model;

        model.forEach(item => {
            let x = item.getX(),
                y = item.getY(),
                radius = item.getRadius(),
                element = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

            element.setAttribute("cx", x);
            element.setAttribute("cy", y);
            element.setAttribute("r", radius);

            field.append(element);
        });
    }

    update() {
        let radius = this._model.map(item => item.getRadius());

        this._field.children().each(function (i, item) {
            $(item).attr('r', radius[i]);
        });
    }
}