const time = document.querySelector('#time')
const date = document.querySelector('#date')

function timeChecking(){
 const nowHou = String(new Date().getHours()).padStart(2,'0')
 const nowMui = String(new Date().getMinutes()).padStart(2,'0')
 const nowSec = String(new Date().getSeconds()).padStart(2,'0')
 time.innerText = `${nowHou}:${nowMui}:${nowSec}`
}
timeChecking()
setInterval(timeChecking,1000)
//현재 시간

function dateChecking(){
    const nowYea = String(new Date().getFullYear())
    const nowMon = String(new Date().getMonth()+1)
    const nowDat = String(new Date().getDate())
    date.innerText = `${nowYea} . ${nowMon} . ${nowDat}`
}
dateChecking()
setInterval(dateChecking,1000)
//현재 날짜










