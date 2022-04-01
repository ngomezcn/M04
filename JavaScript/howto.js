
function getValue(val) {
    var x = 0;
    do {
        x = Math.floor(Math.random() * 199999999)
    } while (x != val);
    return x
}

var x = getValue(10);
console.log(x)
