
const bubble = document.querySelector('.bubble')
const modalContent = document.querySelector('.modal-content img')
const modal = document.querySelector('.modal')
//MODAL SRC

//GRID SRC
const lisIgm = document.getElementById('list-img')
let listGrid = lisIgm.addEventListener('click', (e)=>{
    let list = e.target.src
    if(list != undefined){
        modal.style.display='block'
        modalContent.setAttribute('src',list)
    }
})
//MODAL DISPLAY NONE
let win = window.addEventListener('click', (e)=>{

    if(e.target.className == 'modal'){
        modal.style.display='none'
    }if(e.target.className == 'close'){
        modal.style.display='none'
    }
})
//LOAD
window.addEventListener('load', (event) => {
    let load = event.target.querySelector('.btn-todos')
    let loadCord = load.getBoundingClientRect()
        const coordLoad = {
            height: loadCord.height,
            width:  loadCord.width,
            top:    loadCord.top,
            left:   loadCord.left
        }
    console.log(coordLoad)
    bubble.style.setProperty("left",`${loadCord.left}px`)
    bubble.style.setProperty("top",`${loadCord.top}px`)
    bubble.style.setProperty("width",`${loadCord.width}px`)
    bubble.style.setProperty("height",`${loadCord.height}px`)
});
//FIN LOAD
const boxCta = document.getElementById('box-cta').addEventListener('click', (e)=>{
    //BUBBLE
    const btnCoord = e.target.getBoundingClientRect()
        const directions = {
        height: btnCoord.height,
        width:  btnCoord.width,
        top:    btnCoord.top,
        left:   btnCoord.left
    }

    function bubbleFuntion(){
        bubble.style.setProperty("left",`${directions.left}px`)
        bubble.style.setProperty("top",`${directions.top}px`)
        bubble.style.setProperty("width",`${directions.width}px`)
        bubble.style.setProperty("height",`${directions.height}px`)
    }
    //FIN BUBBLE
    
    const lisIgm = document.getElementById('list-img')
    let itemImg = lisIgm.children
    for(i=0;i<itemImg.length;i++){
    }
    let ArrayItem = Array.from(itemImg)
    let elementoArray = ArrayItem[i]
    let resulado = ArrayItem.filter((elementoArray)=>{
        let claseElement = elementoArray
        let targetClassName = e.target.className 
        //Tierra
        if( targetClassName == 'btn-tierra'){
            bubbleFuntion()
            
            if(claseElement.className != 'tierra'){
                elementoArray.style.display ='none'
            }else{
                elementoArray.style.display ='block'
            }
        }
        //Agua
        if( targetClassName  == 'btn-agua'){
            bubbleFuntion()
            
            if(claseElement.className != 'agua'){
                elementoArray.style.display ='none' 
            }else{
                elementoArray.style.display ='block'
            }
        }
        //Fuego
        if( targetClassName  == 'btn-fuego'){
            bubbleFuntion()
            
            if(claseElement.className != 'fuego'){
                elementoArray.style.display ='none' 
            }else{
                elementoArray.style.display ='block'
            }
        }
        //Aire
        if( targetClassName == 'btn-aire'){
            bubbleFuntion()
            
            if(claseElement.className != 'aire'){
                elementoArray.style.display ='none'
            }else{
                elementoArray.style.display ='block'
            }
        }
        //Todos
        if( targetClassName  == 'btn-todos'){
            bubbleFuntion()
            elementoArray.style.display ='block'
        }
    })
    
})