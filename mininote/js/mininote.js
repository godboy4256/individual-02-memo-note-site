const memoArea = document.querySelector('#memo-area')
const memoTitleInput = document.querySelector('#memo-title-input')
const memoMainInput = document.querySelector('#memo-main-input')
const memoSave = document.querySelector('#memo-save')
const memoList = document.querySelector('#memo-list')
const memoPopUp = document.querySelector('#memo-popup')
const memoTitle = document.querySelector('#memo-title')
const memoMain = document.querySelector('#memo-main')
const close = document.querySelector('#close')
const memoLists = document.querySelectorAll('.memo-lists')


function noevent(event){
    event.preventDefault()
}


function memoListsPopUp(){
   const innerMain = this.querySelector('.inner-main')
   const innerTitle = this.querySelector('.inner-title')
   const innerMainText = innerMain.innerText
   const innerTitleText = innerTitle.innerText
   memoMain.innerText = innerMainText
   memoTitle.innerText = innerTitleText
}

function memoSaving(){
    const ifMemoInputLength = memoMainInput.value.length 
    const ifMemoTitleLength = memoTitleInput.value.length
    if(ifMemoInputLength > 0 &&  ifMemoTitleLength > 0){
        const memoTitleInputValue = memoTitleInput.value
        const memoMainInputValue = memoMainInput.value
        const ctMemoList = document.createElement('li')
        const ctdeleteinput = document.createElement('input')
        const ctTitleValue = document.createElement('span')
        const ctMainValue = document.createElement('span')
        ctTitleValue.innerText = memoTitleInputValue
        ctMainValue.innerText = memoMainInputValue
        ctTitleValue.classList.add('inner-title')
        ctMainValue.classList.add('inner-main')
        ctdeleteinput.type = "checkbox"
        ctMemoList.append(ctdeleteinput,ctTitleValue,ctMainValue)
        ctMemoList.addEventListener('click',memoListsPopUp)
        memoList.append(ctMemoList)
    }  
}




memoArea.addEventListener('submit',noevent)
memoSave.addEventListener('click',memoSaving)

