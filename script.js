const amount = document.getElementById('amount');
const Currency = document.getElementById('Currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey = ""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () =>{
    console.log('Hi')
    const amountTotal = amount.value;
    console.log('total', amountTotal)
    const currencyTotal = Currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url', url)

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data =>{
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        console.log('result',resultPrice)
        result.innerHTML = `${amountTotal} ${Currencyto} = ${resultPrice.toFixed(2)} USD`;
    })

    .catch(error =>{
        console.error('Request failed:',error);
        result.innerHTML = 'An erroroccured please try again later.'
    })
});