
const   keys = document.querySelector('.calc_keys');
const display = document.getElementById('display');


keys.addEventListener('click',  (event) => {

    let target = event.target;

    if(!target.matches('button')){return false;}

    if(target.classList.contains('equal')){

        try {
            let result = eval(display.value);
            display.value = result;
        }catch(s1){
            if(s1 instanceof SyntaxError){
                alert('You have an error, press ok to remove your operation');
                display.value = ''
            }
        }

    }else if(target.classList.contains('all-clear')){
        display.value = '';
    }else{
        display.value += target.value;
    }

});
