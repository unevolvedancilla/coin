function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
const p = document.querySelector('p')
const reset = document.querySelector('button')
let score = -1

window.addEventListener('keyup', function(e) {
	if(e.key ==='ArrowDown') {
		moveVertical(avatar, 50)

	} else if (e.key ==='ArrowUp') {
		moveVertical(avatar, -50)

	}
	else if (e.key ==='ArrowRight') {
		moveHorizontal(avatar, 50)
		avatar.style.transform = 'scale(1,1)'
	}
	else if (e.key ==='ArrowLeft') {
		moveHorizontal(avatar, -50)
	avatar.style.transform = 'scale(-1,1)'
	}
	if(isTouching(avatar, coin)) moveCoinTwo();
})

const moveVertical = (element, amount) => {
	const currTop = extractpos(element.style.top);
	element.style.top = `${currTop + amount}px` 
}

const moveHorizontal = (element, amount) => {
	const currLeft = extractpos(element.style.left);
	element.style.left = `${currLeft + amount}px` 
}


const extractpos = (pos) =>  {
if (!pos) return 100;
return parseInt(pos.slice(0,-2))
}

const scoreline = () => {
	score +=1
	p.innerText = `Score: ${score}`
}
setInterval(moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}
, 1000)

const moveCoinTwo = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
	scoreline();
}


	reset.addEventListener('click', function() {
		score += -score
		p.innerText = `Score: ${score}`
	})


moveCoin();

