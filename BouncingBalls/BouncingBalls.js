// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ballCountDom = document.getElementById("ballCount");
var ballCount = 0;
var evilCircle;
// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// define Shape constructor

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;

}

// Define Ball constructer inherit from Shape
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// define ball draw method

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

// define ball update method

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size && balls[j].exists) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
};

// define EvilCircle constructor that inherits from Shape
function EvilCircle(x, y, velX, velY, exists, color,size) {
    Shape.call(this, x, y, velX, velY, exists, color);
    this.color = color;
    this.size = size;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// define EvilCircle draw method

EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
};


// define EvilCircle checkBounds method

EvilCircle.prototype.checkBounds = function () {
    if ((this.x + this.size) >= width) {
        this.x -= (this.size);
    }

    if ((this.x - this.size) <= 0) {
        this.x += (this.size);
    }

    if ((this.y + this.size) >= height) {
        this.y -= (this.size);
    }

    if ((this.y - this.size) <= 0) {
        this.y += (this.size);
    }


};

// define EvilCircle's setControls method

EvilCircle.prototype.setControls = function () {
    var _this = this; // So that the context remains same when window.onkeydown is called
    window.onkeydown = function (e) {
        if (e.keyCode === 65) {
            _this.x -= _this.velX;
        } else if (e.keyCode === 68) {
            _this.x += _this.velX;
        } else if (e.keyCode === 87) {
            _this.y -= _this.velY;
        } else if (e.keyCode === 83) {
            _this.y += _this.velY;
        }
    }
}


// define EvilCircles collisionDetect method

EvilCircle.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(balls[j].exists === false)) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
                balls[j].color = 'rgba(0,0,0,0.25)';
                ballCount--;
                ballCountDom.innerText = ballCount;
            }
        }
    }
}
// define array to store balls

var balls = [];

// define loop that keeps drawing the scene constantly

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            random(10, 20)
        );

        balls.push(ball);
        ballCount++;
        ballCountDom.innerText = ballCount;
    }

    if (evilCircle === undefined || evilCircle === null) {
        evilCircle = new EvilCircle(random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            true,
            'white',
            random(10, 20));
        evilCircle.setControls();
    }
    


    for (var i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    ballCountDom.innerText = ballCount;
    requestAnimationFrame(loop);
}


loop();