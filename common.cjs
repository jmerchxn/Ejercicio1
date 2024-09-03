const numero = Math.ceil(Math.random() * 100);
console.log(numero);
function numeroPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    numeroPrimo
}
