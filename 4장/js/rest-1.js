// 나머지 매개변수

function addNum2(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(addNum2(1,3))

console.log(addNum2(1,3,5,7,9))