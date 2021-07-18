const randomBackground = document.querySelector('#random-background')
const randomBackgroundImages = [
    'back_random01',
    'back_random02',
    'back_random03',
    'back_random04',
    'back_random05',
    'back_random06',
    'back_random07',
    'back_random08',
    'back_random09',
    'back_random10',
]

function backGroundRandoming(){
  const randomBgNum = randomBackgroundImages.length
  const randomBg = Math.floor(Math.random()*randomBgNum)
  const randomBgClass = randomBackgroundImages[randomBg]
  randomBackground.classList.add(randomBgClass)
}

backGroundRandoming()


