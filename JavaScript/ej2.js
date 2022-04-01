function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateSecretCode(size) {
    let array = []
    for (let index = 0; index < size; index++) {
        array.push(generateRandomInt(1, 10));
    }
    //return [1, 1, 1, 4, 5]
    return array;
}


function inputArray(size) {
    let array = []
    for (let index = 0; index < size; index++) {
        msg = "Indica el numero de la posicion " + (index + 1).toString()
        array.push(prompt(msg));
    }
    return array;
}

function generateArrayOfSameChar(length, char) { 
    let arr = []
    for (let i = 0; i < length; i++) arr.push(char);
    return arr
}

function checkArrayMatchValues(arr1, arr2, length) {
    let result = generateArrayOfSameChar(length, '-')
    for (let i = 0; i < length; i++) {

        let counter_match_times = 0;
        for (let j = 0; j < length; j++) {
            if (arr1[i] == arr2[j] && i == j) {
                result[i] = 'OK';
                counter_match_times = 0;
                break;
            }
            if (arr1[i] == arr2[j]) {
                counter_match_times++;
            }
        }
        if (counter_match_times >= 1) {
            result[i] = counter_match_times;
        }
    }
    return result;
}

function main() {
    let secret_code_size = 5

    const secret_code = generateSecretCode(secret_code_size)
    //const user_arr = ['1', '1', '1', '4', '5']1
    const user_arr = inputArray(secret_code_size)
    const result = checkArrayMatchValues(user_arr, secret_code, secret_code_size)
    
    console.log('secret code:', secret_code);
    console.log('user arr', user_arr)
    console.log('result', result)
}

main();
