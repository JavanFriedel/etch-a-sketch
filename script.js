const box = document.querySelector('#etch-box')
const defaultDim = 16

function drawbox (x = defaultDim) {  
    let boxDimension = box.offsetWidth / x
    

    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            let childBox = document.createElement('div')
            childBox.classList = "childBox" 
            childBox.style.width = boxDimension + "px"
            childBox.style.height = boxDimension + "px"         
            childBox.addEventListener('mouseover', (e) => {
                let opacity = parseFloat(childBox.style.opacity)
                
                //if opacity is maxed than return
                if (opacity >= 1) return

                //if mouse button pressed than draw in box
                if(e.buttons == 1 || e.buttons == 3) {                    
                    childBox.style.opacity = opacity + 0.25 || 0.25 
                }                                           
            })

            //prevent default click and drag functionality
            childBox.addEventListener('dragstart', (e) => {
                e.preventDefault()
            })

            box.appendChild(childBox)
        }   
    }
}


function clearBox (dim) {
    while(box.lastChild){
        box.removeChild(box.lastChild);
    }

    drawbox(dim) 
}


document.querySelector('input[type=submit]').addEventListener('click', () => {
    let resX = parseInt(document.querySelector('#resX').value)
    
    if (resX > 100){
       alert('Number must be smaller than 100') 
       return
    } 
    
    clearBox(resX);
})


drawbox(16)
