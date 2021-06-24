const arrayTranche = []
const stepOne = document.getElementById('step1')
const stepTwo = document.getElementById('step2')
const stepThree = document.getElementById('step3')
const stepFour = document.getElementById('step4')

function changeStep(step){
    if(step == 1 ){
        stepOne.classList.add('disabled')
        stepTwo.classList.remove('disabled')
    }else     if(step == 2 ){
        stepTwo.classList.add('disabled')
        stepThree.classList.remove('disabled')
    }else     if(step == 3 ){
        stepThree.classList.add('disabled')
        stepFour.classList.remove('disabled')
    }

}