const Paddle = function (player, color) {
	const c = color
	const w = 25
	const h = 90
	const p = player
	const x = p === 1 ? 100 : width - w *4
	const speed = 8
	let y = Math.floor(height / 2)
	let score = 0
	const UP = -1
	const DOWN = 1

	const getX = function () {
		return x
	}
	const getY = function () {
		return y
	}
	const getW = function () {
		return w
	}
	const getH = function () {
		return h
	}

	const getScore = function () {
		return score
	}

	const draw = function () {
		noStroke()
		rectMode(CORNER)
		fill(c)
		rect(x, y, w, h)
	}	

 	const move = function (dir) {
 		if (edge(dir))
 			y+= (speed*dir)
 		if (edge2(dir))
 			x+= (speed*dir)
 		
 	}

 	const edge = function (dir) {
 		return (dir === UP && y > 0 || dir === DOWN && y < height-h)
 	}

 	const edge2 = function (dir) {
 		return (dir === LEFT && x < width/2 || dir === RIGHT && x > width/2 )
 	}

 	const updateScore = function () {
 		score++
 	}

	return {
		draw,
		move,
		getX,
		getY,
		getW,
		getH,
		getScore,
		updateScore,
	}
}