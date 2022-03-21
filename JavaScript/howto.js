
function getValue(val) {
    var x = 0;
    do {
        x = Math.floor(Math.random() * 99999999 + 0)
    } while (x != val);
    return x
}

var x = getValue(10);
console.log(x)
