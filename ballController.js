export class BallController {
    constructor(model, view) {
        let _model = model,
            _view = view;

        this.getModel = function () {
            return _model;
        }

        this.getView = function () {
            return _view;
        }
    }

    changeSpeedDirection() {
        let model = this.getModel(),
            speed = model.getSpeed();

        model.setSpeed(-speed);
    }

    expandBall() {
        let view = this.getView(),
            model = this.getModel(),
            speed = model.getSpeed(),
            radius = model.getRadius();

        model.setRadius(Math.round((radius + speed) * 100) / 100);

        if (model.getRadius() >= 30) {
            this.changeSpeedDirection();
        }

        if (model.getRadius() <= 0) {
            this.changeSpeedDirection();
        }
    }
}