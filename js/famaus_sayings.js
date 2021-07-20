const whoSaying = document.querySelector('#who-saying')
const famausSaying = document.querySelector('#famaus-saying')


const sayingArray = [
    {
       who : '키케로',
       say : '삶이 있는 한 희망은 있다.'
    },
    {
        who : '로망 로랑',
        say : '산다는것 그것은 치열한 전투이다.'
     },
     {
        who : '사무엘 존슨',
        say : '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.'
     },
     {
        who : '파울로 코엘료',
        say : '언제나 현재에 집중할수 있다면 행복할것이다.'
     },
     {
        who : '찰리 채플린',
        say : '진정으로 웃으려면 고통을 참아야하며 나아가 고통을 즐길 줄 알아야 해.'
     },
     {
        who : '켄러',
        say : '신은 용기있는자를 결코 버리지 않는다.'
     },
     {
        who : '헬렌 켈러',
        say : '우리를 향해 열린 문을 보지 못하게 된다.'
     },
     {
        who : '로버트 엘리엇',
        say : '피할수 없으면 즐겨라.'
     },
     {
        who : '허버드',
        say : '행복은 습관이다,그것을 몸에 지니라.'
     },
     {
        who : '찰스 다윈',
        say : '자신감 있는 표정을 지으면 자신감이 생긴다.'
     }
]


function randomsaying(){
  const sayingsArrayLength = sayingArray.length
  const random  = Math.floor(Math.random()*sayingsArrayLength)
  const whoRandom = sayingArray[random].who
  const sayRandom = sayingArray[random].say
  whoSaying.innerText = whoRandom
  famausSaying.innerText = sayRandom
}

randomsaying()





