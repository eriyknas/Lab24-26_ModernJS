const rates = {
    USD: 1,
    EUR: 0.92,
    RUB: 92.5
};

async function convertCurrency() {
    try {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        
        if (amount === "") {
            console.log("Пустой ввод");
            document.getElementById('result').innerHTML = "Введите сумму";
            return;
        }

        const inUSD = amount / rates[fromCurrency];
        const result = inUSD * rates[toCurrency];

        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        
    } catch (error) {
        console.log("Ошибка:", error.message);
        document.getElementById('result').innerHTML = "Произошла ошибка";
    }
}

document.getElementById('convertBtn').addEventListener('click', convertCurrency);