"let ticks = 0
let emptyObstacleY = 0
let bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
let index = 0
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
    })
    input.onButtonPressed(Button.B, function () {
        bird.change(LedSpriteProperty.Y, 1)
        })
        index = 0
        obstacles = []
        bird = game.createSprite(0, 2)
        bird.set(LedSpriteProperty.Blink, 300)
        basic.forever(function () {
            while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
                    obstacles.removeAt(0).delete()
                        }
                            for (let obstacle2 of obstacles) {
                                    obstacle2.change(LedSpriteProperty.X, -1)
                                        }
                                            if (ticks % 3 == 0) {
                                                    emptyObstacleY = Math.randomRange(0, 4)
                                                            for (let index2 = 0; index2 <= 4; index2++) {
                                                                        if (index2 != emptyObstacleY) {
                                                                                        obstacles.push(game.createSprite(4, index2))
                                                                                                    }
                                                                                                            }
                                                                                                                }
                                                                                                                    for (let obstacle3 of obstacles) {
                                                                                                                            if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                                                                                                                                        basic.showIcon(IconNames.Skull)
                                                                                                                                                    game.gameOver()
                                                                                                                                                            }
                                                                                                                                                                }
                                                                                                                                                                    ticks += 1
                                                                                                                                                                        basic.pause(600)
                                                                                                                                                                        })"
                                                                                                                                                                         https://gist.github.com/janlindblom/008c46c283f1f60b9f8601399d0e4417#:~:text=crashybird_kulturkarnevalen.ts-,let%20ticks%20%3D%200,%7D),-Sign%20up%20forum
