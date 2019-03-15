export const MAX_RADIUS = 30;

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

        if (radius >= MAX_RADIUS || radius === 0) {
            model.setSpeed(-speed);
        }

        model.setRadius(radius);
        model.updateView();
    }
}