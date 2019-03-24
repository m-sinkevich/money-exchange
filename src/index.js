const cost = [50, 25, 10, 5, 1];
const errorMessage = "You are rich, my friend! We don't have so much coins for exchange";

module.exports = function makeExchange(currency) {
    let result = [];
    let coins = currency;

    for (let i = 0; i < cost.length; i++) {
        if ((currency / cost[i]) != 0) {
            result[i] = Math.floor(coins / cost[i]);
            coins = coins - (cost[i] * result[i]);
        } else {
            result[i] = 0;
        }
    }
    let exchangeObj = {};

    if (result[0] > 0) {
        exchangeObj.H = result[0];
    }
    if (result[1] > 0) {
        exchangeObj.Q = result[1];
    }
    if (result[2] > 0) {
        exchangeObj.D = result[2];
    }
    if (result[3] > 0) {
        exchangeObj.N = result[3];
    }
    if (result[4] > 0) {
        exchangeObj.P = result[4];
    }

    if (currency >= 10000) {
        exchangeObj = {error: errorMessage};
    } else if (currency < 0) {
        exchangeObj = {};
    }

    return exchangeObj;
}
