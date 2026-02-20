

let inp = document.getElementById("input")
let print2 = document.getElementById("print2")

const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*',
    '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '\\', '|',
    ';', ':', "'", '"', ',', '<',
    '.', '>', '/', '?', '`', '~'
];






let check = () => {
    let strength = 0;
    let data = inp.value;
    // strength += data.length;
    let dataArr = data.split("")
    for (let i = 0; i < dataArr.length; i++) {
        let parsedElem = Number.parseInt(dataArr[i])
        if (Number.isNaN(parsedElem)) {
            if(symbols.includes(dataArr[i])){
                strength+=40
            }
            let upperedEleme = dataArr[i].toUpperCase();
            if (dataArr[i] == upperedEleme) {
                strength += 5
            }
            strength += 10;

        } else {
            strength += 20
        }
    }
    print2.innerHTML = strength;
}



inp.addEventListener("input", check)
