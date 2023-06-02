function simplesArraySum(arrei) {
    let sum = 0;
    for (let index = 0; index < arrei.length; index += 1) {
        sum += arrei[index];
        }
        return sum
    }

const meuArray = [1, 2, 3, 10, 40]
simplesArraySum(meuArray);