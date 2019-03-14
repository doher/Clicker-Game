const MAX_RADIUS = 30;

export class BallController {
    constructor() {
        let _model;
    }

    start(model) {
        this._model = model;
    }

    expandBall() {
        let model = this._model;

        model = model.map(item => {
            let radius = item.getRadius(),
                speed = item.getSpeed();

            radius = ((radius + speed) < 0) ? 0 : (radius + speed);

            if (radius >= MAX_RADIUS || radius === 0) {
                item.setSpeed(-speed);
            }

            item.setRadius(radius);

            return item;
        });

        model.forEach(item => {
            item.updateView();
        });
    }
}