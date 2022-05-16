function resaltar() {
    const words = document.getElementsByTagName('strong')

    for (let index = 0; index < words.length; index++) {
        words[index].style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
        words[index].style.fontSize = Math.floor((Math.random() * 4) + 17)+"px";
    }
}

function tornaNormal() {
    const words = document.getElementsByTagName('strong')

    for (let index = 0; index < words.length; index++) {
        words[index].style.color = null;
        words[index].style.fontSize = null;
    }
}