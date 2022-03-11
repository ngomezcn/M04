
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateSecretCode(size) {
    let array = []
    for (let index = 0; index < size; index++) {
        array.push(generateRandomInt(1, 10));
    }
    return [1, 1, 1, 4, 5]
    return array;
}

function isNumInPosition(array, pos, num) {

    if (array[pos - 1] == num) {
        return true;
    } else {
        return false;
    }
}

function inputArray(size) {
    let array = []
    for (let index = 0; index < size; index++) {
        msg = "Indica el numero de la posicion " + (index + 1).toString()
        array.push(prompt(msg));
    }
    return array;
}

function checkArrayMatchValues(arr1, arr2, length) {
    let result = Array(end - start + 1).fill().map((_, idx) => start + idx)
    for (let i = 0; i < length; i++) {

        let counter = 0;
        for (let j = 0; j < length; j++) {
            if (arr1[i] == arr2[j] && i == j) {
                result[i] = 'OK';
                counter = 0;
                break;
            }
            if (arr1[i] == arr2[j]) {
                counter++;
            }
        }
        if (counter >= 1) {
            result[i] = counter;
        }
    }
    return result;
}

function main() {
    arr_size = 5
    const secret_code = generateSecretCode(arr_size)
    console.log('secret code:', secret_code);

    //const user_arr = inputArray(arr_size)
    const user_arr = ['1', '1', '1', '4', '5']
    const result = checkArrayMatchValues(user_arr, secret_code, arr_size)
    console.log('user arr', user_arr)
    console.log('result', result)
}

main();