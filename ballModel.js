function random(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

export class BallModel {
    constructor(radius, speed) {
        let _radius = radius,
            _speed = speed;

        this.getX = function () {
            return random(30, 300);
        }

        this.getY = function () {
            return random(30, 300);
        }

        this.getRadius = function () {
            return _radius;
        }

        this.setRadius = function (radius) {
            _radius = radius;
        }

        this.getSpeed = function () {
            return _speed;
        }

        this.setSpeed = function (speed) {
            _speed = speed;
        }
    }
}






