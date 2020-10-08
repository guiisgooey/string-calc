const string1Input = document.getElementById('string1')
const string2Input = document.getElementById('string2')
const formulaInput = document.getElementById('formula')
const fontInput = document.getElementById('font')
const styleInput = document.getElementById('style')
const colorInput = document.getElementById('color')
const bgInput = document.getElementById('bg')

function changeFont(){
    const f = fontInput.value
    document.querySelector("h2").style.fontFamily = f
    document.getElementById("finalstring").style.fontFamily = f
}

function changeColor(){
    const c = colorInput.value
    document.querySelector("h2").style.color = c
    document.getElementById("finalstring").style.color = c
}

function changeBg(){
    const bg = bgInput.value
    document.querySelector("h2").style.backgroundColor = bg
    document.getElementById("finalstring").style.backgroundColor = bg
}

function changeStyle(){
    const s = styleInput.value
    if (s === "small-caps"){
        document.getElementById("finalstring").style.fontStyle = "normal"
        document.querySelector("h2").style.fontStyle = "normal"
        document.getElementById("finalstring").style.fontVariant = s
        document.querySelector("h2").style.fontVariant = s
    }
    else{
        document.getElementById("finalstring").style.fontVariant = "normal"
        document.querySelector("h2").style.fontVariant = "normal"
        document.getElementById("finalstring").style.fontStyle = s
        document.querySelector("h2").style.fontStyle = s
    }
}

function calcString(){
    const operation = formulaInput.value
    let str = ""
    switch (operation) {
        case "sub":
            str = stringSub()
            break
        case "mult":
            str = stringMult();
            break
        case "div":
            str = StringDiv();
            break
        default:
            str = stringAdd()
    }
    document.getElementById("finalstring").innerHTML = str
}

function stringAdd(){
    const string1 = string1Input.value
    const string2 = string2Input.value
    document.getElementById("arithmetic").innerHTML = `${string1} + ${string2} =`
    return(string1 + string2)
}

function stringSub() {
    const string1 = string1Input.value
    const string2 = string2Input.value
    document.getElementById("arithmetic").innerHTML = `${string1} - ${string2} =`
    let str = string1
    let str2 = string2
    for(i = 0; i<string2.length; i++){
        str = str.replace(string2[i], "")
    } 
    for (i = 0; i < string1.length; i++){
        str2 = str2.replace(string1[i], "")
    } 
    return (str + " - " + str2)

}

fontInput.addEventListener('change', changeFont)
string1Input.addEventListener('input', calcString)
string2Input.addEventListener('input', calcString)
formulaInput.addEventListener('change', calcString)
colorInput.addEventListener('change', changeColor)
bgInput.addEventListener('change', changeBg)
styleInput.addEventListener('change', changeStyle)