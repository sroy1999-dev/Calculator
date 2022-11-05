let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let ValueOnScreen = "";

for(let items of buttons) {
    items.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText === 'x'){
            buttonText = '*';
            ValueOnScreen += buttonText
            screen.value = ValueOnScreen;
        }else if(buttonText === 'C') {
            ValueOnScreen = "";
            screen.value = ValueOnScreen;
        }else if(buttonText === '=') {
            screen.value = eval(ValueOnScreen);
        }else{
            ValueOnScreen += buttonText;
            screen.value = ValueOnScreen;
        }
    })
}