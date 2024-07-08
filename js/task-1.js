const quantity = 5;
const pricePerDroid = 3000;
const customerCredits = 23000;

const totalPrice = quantity * pricePerDroid;


function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    }
    else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits`
    }
}