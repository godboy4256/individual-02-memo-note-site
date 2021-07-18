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
    const nowMon = String(new Date().getMonth())
    const nowDat = String(new Date().getDate())
    const nowYea = String(new Date().getFullYear())
    date.innerText = `${nowYea}/${nowMon}/${nowDat}`
}
dateChecking()
setInterval(dateChecking,86400)
//현재 날짜










