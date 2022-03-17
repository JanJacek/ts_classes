import {exchanger} from './exchanger';

initEventListener();
function initEventListener() {
    let d = document
    type ehtml = HTMLElement | null 
    const btn: ehtml  = d.getElementById("exchange");
    const resultTxt: ehtml  = d.getElementById("result");

    const getItputNumberValue = (id: string):number =>{
        const element: ehtml = d.getElementById(id)

        if (element != null && element instanceof HTMLInputElement) {
            return element.valueAsNumber;
        } else {
            throw new Error(`HTML element is null or wrong type`);
        }
    }

    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener<"click">("click", (event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                const ex :exchanger =  new exchanger(
                    getItputNumberValue('gold'),
                    getItputNumberValue ('silver'),
                    getItputNumberValue ('copper')
                );
                if(resultTxt !== null){
                    resultTxt.innerText = `${ex.toCopper()}`
                }
            });
        } else {
            throw new Error(`HTML element for exchange is not found`);
        }
    } else {
        throw new Error(`Button exchange not found`);
    }
}




