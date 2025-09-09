// 游戏变量
let canvas, ctx;
let paddle, ball;
let bricks = [];
let score = 0;
let lives = 3;
let gameStarted = false;
let animationId;

// 游戏配置
const config = {
    brickRowCount: 4,
    brickColumnCount: 8,
    brickWidth: 55,
    brickHeight: 20,
    brickPadding: 5,
    brickOffsetTop: 50,
    brickOffsetLeft: 15,
    ballRadius: 8,
    paddleHeight: 12,
    paddleWidth: 80,
    paddleSpeed: 7,
    ballSpeed: 5
};

// 颜色配置
const colors = {
    ball: '#FF6B6B',
    paddle: '#4ECDC4',
    brickColors: ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C']
};

// 渐变色配置
const gradients = [
    ['#ff9a9e', '#fad0c4'],
    ['#a1c4fd', '#c2e9fb'],
    ['#d4fc79', '#96e6a1'],
    ['#84fab0', '#8fd3f4'],
    ['#fccb90', '#d57eeb']
];

// 键盘控制
const keys = {
    right: false,
    left: false
};

// 初始化游戏
function init() {
    // 获取画布和上下文
    canvas = document.getElementById('gameCanvas');
    canvas.width = 500;  // 设置适合游戏机的画布宽度
    canvas.height = 400; // 设置适合游戏机的画布高度
    ctx = canvas.getContext('2d');

    // 创建挡板
    paddle = {
        x: canvas.width / 2 - config.paddleWidth / 2,
        y: canvas.height - 30,
        width: config.paddleWidth,
        height: config.paddleHeight,
        dx: 0
    };

    // 创建球
    ball = {
        x: canvas.width / 2,
        y: paddle.y - config.ballRadius,
        radius: config.ballRadius,
        dx: config.ballSpeed * (Math.random() > 0.5 ? 1 : -1),
        dy: -config.ballSpeed
    };

    // 创建砖块
    createBricks();

    // 添加事件监听器
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    document.getElementById('startButton').addEventListener('click', startGame);
    
    // 添加游戏机按钮控制
    document.querySelector('.start-button').addEventListener('click', startGame);
    document.querySelector('.red-button').addEventListener('mousedown', () => keys.left = true);
    document.querySelector('.red-button').addEventListener('mouseup', () => keys.left = false);
    document.querySelector('.red-button').addEventListener('mouseleave', () => keys.left = false);
    document.querySelector('.blue-button').addEventListener('mousedown', () => keys.right = true);
    document.querySelector('.blue-button').addEventListener('mouseup', () => keys.right = false);
    document.querySelector('.blue-button').addEventListener('mouseleave', () => keys.right = false);
    
    // 添加摇杆控制
    const joystick = document.querySelector('.joystick-stick');
    let isDragging = false;
    
    joystick.addEventListener('mousedown', () => {
        isDragging = true;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const joystickBase = document.querySelector('.joystick-base');
            const baseRect = joystickBase.getBoundingClientRect();
            const centerX = baseRect.left + baseRect.width / 2;
            
            if (e.clientX < centerX - 10) {
                keys.left = true;
                keys.right = false;
            } else if (e.clientX > centerX + 10) {
                keys.right = true;
                keys.left = false;
            } else {
                keys.left = false;
                keys.right = false;
            }
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            keys.left = false;
            keys.right = false;
        }
    });

    // 绘制初始游戏状态
    draw();
}

// 创建砖块
function createBricks() {
    bricks = [];
    for (let c = 0; c < config.brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < config.brickRowCount; r++) {
            const brickX = c * (config.brickWidth + config.brickPadding) + config.brickOffsetLeft;
            const brickY = r * (config.brickHeight + config.brickPadding) + config.brickOffsetTop;
            bricks[c][r] = {
                x: brickX,
                y: brickY,
                status: 1,
                color: colors.brickColors[r % colors.brickColors.length],
                gradient: gradients[Math.floor(Math.random() * gradients.length)]
            };
        }
    }
}

// 开始游戏
function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById('startButton').textContent = '暂停';
        document.querySelector('.start-button').textContent = '暂停';
        update();
    } else {
        gameStarted = false;
        document.getElementById('startButton').textContent = '继续';
        document.querySelector('.start-button').textContent = '继续';
        cancelAnimationFrame(animationId);
    }
}

// 重置球的位置
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = paddle.y - config.ballRadius;
    ball.dx = config.ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = -config.ballSpeed;
}

// 键盘按下事件
function keyDown(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        keys.right = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        keys.left = true;
    }
}

// 键盘释放事件
function keyUp(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        keys.right = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        keys.left = false;
    }
}

// 更新游戏状态
function update() {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制游戏元素
    draw();

    // 移动挡板
    movePaddle();

    // 移动球
    moveBall();

    // 检测碰撞
    detectCollision();

    // 检查游戏状态
    checkGameState();

    // 继续动画
    if (gameStarted) {
        animationId = requestAnimationFrame(update);
    }
}

// 绘制游戏元素
function draw() {
    // 绘制挡板
    ctx.fillStyle = colors.paddle;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    // 绘制球
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = colors.ball;
    ctx.fill();
    ctx.closePath();

    // 绘制砖块
    drawBricks();
}

// 绘制砖块
function drawBricks() {
    for (let c = 0; c < config.brickColumnCount; c++) {
        for (let r = 0; r < config.brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                // 创建渐变色
                const gradient = ctx.createLinearGradient(
                    bricks[c][r].x, bricks[c][r].y,
                    bricks[c][r].x + config.brickWidth, bricks[c][r].y + config.brickHeight
                );
                gradient.addColorStop(0, bricks[c][r].gradient[0]);
                gradient.addColorStop(1, bricks[c][r].gradient[1]);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(bricks[c][r].x, bricks[c][r].y, config.brickWidth, config.brickHeight);
                ctx.strokeStyle = '#FFF';
                ctx.strokeRect(bricks[c][r].x, bricks[c][r].y, config.brickWidth, config.brickHeight);
            }
        }
    }
}

// 移动挡板
function movePaddle() {
    paddle.dx = 0;
    if (keys.right) {
        paddle.dx = config.paddleSpeed;
    } else if (keys.left) {
        paddle.dx = -config.paddleSpeed;
    }

    paddle.x += paddle.dx;

    // 边界检测
    if (paddle.x < 0) {
        paddle.x = 0;
    } else if (paddle.x + paddle.width > canvas.width) {
        paddle.x = canvas.width - paddle.width;
    }
}

// 移动球
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // 墙壁碰撞检测
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }

    // 顶部碰撞检测
    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    // 底部碰撞检测（失去生命）
    if (ball.y + ball.radius > canvas.height) {
        lives--;
        updateLives();
        if (lives <= 0) {
            gameOver();
        } else {
            resetBall();
        }
    }
}

// 检测碰撞
function detectCollision() {
    // 挡板碰撞检测
    if (
        ball.y + ball.radius > paddle.y &&
        ball.y - ball.radius < paddle.y + paddle.height &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
    ) {
        // 计算碰撞点相对于挡板中心的位置（-1到1之间）
        const hitPoint = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
        
        // 根据碰撞点改变球的水平方向
        ball.dx = hitPoint * config.ballSpeed;
        
        // 反弹
        ball.dy = -Math.abs(ball.dy);
    }

    // 砖块碰撞检测
    for (let c = 0; c < config.brickColumnCount; c++) {
        for (let r = 0; r < config.brickRowCount; r++) {
            const brick = bricks[c][r];
            if (brick.status === 1) {
                if (
                    ball.x + ball.radius > brick.x &&
                    ball.x - ball.radius < brick.x + config.brickWidth &&
                    ball.y + ball.radius > brick.y &&
                    ball.y - ball.radius < brick.y + config.brickHeight
                ) {
                    ball.dy = -ball.dy;
                    brick.status = 0;
                    score += 10;
                    updateScore();

                    // 检查是否所有砖块都被击中
                    checkWin();
                }
            }
        }
    }
}

// 更新分数显示
function updateScore() {
    document.getElementById('score').textContent = score;
}

// 更新生命显示
function updateLives() {
    document.getElementById('lives').textContent = lives;
}

// 检查游戏状态
function checkGameState() {
    // 游戏状态检查逻辑
}

// 检查是否获胜
function checkWin() {
    let allBricksDestroyed = true;
    for (let c = 0; c < config.brickColumnCount; c++) {
        for (let r = 0; r < config.brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                allBricksDestroyed = false;
                break;
            }
        }
    }

    if (allBricksDestroyed) {
        showMessage('恭喜你赢了！');
        gameStarted = false;
        cancelAnimationFrame(animationId);
        document.getElementById('startButton').textContent = '再玩一次';
        document.querySelector('.start-button').textContent = '再玩一次';
        // 重置游戏状态，但不立即开始
        score = 0;
        lives = 3;
        updateScore();
        updateLives();
        createBricks();
        resetBall();
        draw();
    }
}

// 游戏结束
function gameOver() {
    showMessage('游戏结束！');
    gameStarted = false;
    cancelAnimationFrame(animationId);
    document.getElementById('startButton').textContent = '再玩一次';
    document.querySelector('.start-button').textContent = '再玩一次';
    // 重置游戏状态，但不立即开始
    score = 0;
    lives = 3;
    updateScore();
    updateLives();
    createBricks();
    resetBall();
    draw();
}

// 显示消息
function showMessage(msg) {
    // 绘制半透明背景
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制消息框
    ctx.fillStyle = 'rgba(50, 50, 50, 0.9)';
    ctx.fillRect(canvas.width/2 - 200, canvas.height/2 - 80, 400, 160);
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 4;
    ctx.strokeRect(canvas.width/2 - 200, canvas.height/2 - 80, 400, 160);
    
    // 绘制消息
    ctx.font = '36px Arial';
    ctx.fillStyle = '#FFF';
    ctx.textAlign = 'center';
    ctx.fillText(msg, canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '18px Arial';
    ctx.fillText('点击"再玩一次"按钮或绿色按钮重新开始', canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText('使用摇杆或红蓝按钮控制挡板', canvas.width / 2, canvas.height / 2 + 50);
}

// 当页面加载完成时初始化游戏
window.addEventListener('load', init);