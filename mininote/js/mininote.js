const memoArea = document.querySelector('#memo-area')
     ,memoTitleInput = document.querySelector('#memo-title-input')
     ,memoMainInput = document.querySelector('#memo-main-input')
     ,memoSave = document.querySelector('#memo-save')
     ,memoList = document.querySelector('#memo-list')
     ,memoPopUp = document.querySelector('#memo-popup')
     ,memoTitle = document.querySelector('#memo-title')
     ,memoMain = document.querySelector('#memo-main')
     ,memoDelete = document.querySelector('#delet-button')
     ,close = document.querySelector('#close')

     let n = 0
     let memoSavingList = []
     let checkTarget = [1,2]

function noevent(event){
    event.preventDefault()
}

function deleteTarget(){
   
}

function memoListsPopUp(){
   const innerMain = this.querySelector('.inner-main')
         ,innerTitle = this.querySelector('.inner-title')
         ,innerMainText = innerMain.innerText
         ,innerTitleText = innerTitle.innerText
   memoMain.innerText = innerMainText
   memoTitle.innerText = innerTitleText
}

function memoCreative(memoTitleInputValue,memoMainInputValue){

    const ctMemoList = document.createElement('li')
         ,ctdeleteinput = document.createElement('input')
         ,ctTitleValue = document.createElement('span')
         ,ctMainValue = document.createElement('span')
         
    ctTitleValue.innerText = memoTitleInputValue
    ctMainValue.innerText = memoMainInputValue
    ctdeleteinput.type = "checkbox"     
    ctdeleteinput.addEventListener('change',function(){
        this.parentElement.classList.toggle('del')
        memoDelete.addEventListener('click',function(){
         document.querySelectorAll('.del').forEach(item => {
             item.remove()
             memoSavingList = memoSavingList.filter((item2) => item2.id !== item.id)
             localStorage.setItem('storagememosave',JSON.stringify(memoSavingList)) 
         })
        })
    })
    
    ctTitleValue.classList.add('inner-title')
    ctMainValue.classList.add('inner-main')
    ctMemoList.append(ctdeleteinput,ctTitleValue,ctMainValue)
    n++
    ctMemoList.id = `ctmemo${n}`
    const ctMemoObject  = {
        id:ctMemoList.id,
        ctt:memoTitleInputValue,
        ctm:memoMainInputValue
    }

    const memoData = ctMemoObject
    memoSavingList.push(memoData)
    const memusavingString = JSON.stringify(memoSavingList)
    localStorage.setItem('storagememosave', memusavingString)
    ctMemoList.addEventListener('click',memoListsPopUp)
    memoList.append(ctMemoList)
}

function setMemo(){
    const ifMemoInputLength = memoMainInput.value.length 
         ,ifMemoTitleLength = memoTitleInput.value.length
    if(ifMemoInputLength > 0 &&  ifMemoTitleLength > 0){
        memoCreative(memoTitleInput.value,memoMainInput.value)
    }  
}

function loadingSaveMemos(){
    if(localStorage.getItem('storagememosave')){
    const storageMemoSave = JSON.parse(localStorage.getItem('storagememosave'))
    storageMemoSave.forEach(item => {
        memoCreative(item.ctt,item.ctm)
    })
   }
}


loadingSaveMemos()
memoArea.addEventListener('submit',noevent)
memoSave.addEventListener('click',setMemo)



