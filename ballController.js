'use strict';

export const MAX_RADIUS = 20;

export class BallController {
    constructor() {
        let _model;
    }

    start(model) {
        this._model = model;
    }

    expandBall() {
        let model = this._model,
            radius = model.getRadius(),
            speed = model.getSpeed();

        radius = ((radius + speed) < 0) ? 0 : (radius + speed);

        if (radius >= MAX_RADIUS) {
            model.setSpeed(-speed);
        }

        model.setRadius(radius);
        model.updateView();
    }
}