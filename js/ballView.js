'use strict';

export class BallView {
    constructor() {
        let _field,
            _model;
    }

    start(model, field) {
        this._field = field;
        this._model = model;

        let x = model.getX(),
            y = model.getY(),
            radius = model.getRadius(),
            element = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

        element.setAttribute("cx", x);
        element.setAttribute("cy", y);
        element.setAttribute("r", radius);
        element.setAttribute("fill", "url(#ballGradient)");

        field.append(element);
    }

    getElement() {
        let x = this._model.getX(),
            y = this._model.getY(),
            field = this._field,
            element;

        field.children().each(function (i, item) {
            let cx = $(item).attr('cx'),
                cy = $(item).attr('cy');

            if ((cx == x) && (cy == y)) {
                element = item;
            }
        });

        return element;
    }

    update() {
        let radius = this._model.getRadius(),
            element = this.getElement(),
            field = this._field;

        field.find(element).attr('r', radius);
        radius === 0 ? field.find(element).remove() : radius;
    }
}