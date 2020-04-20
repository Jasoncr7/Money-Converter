const select = document.querySelector('select');
const inputNaira = document.querySelector('.naira');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(select.value == 'nairadollar') {
        const dollarNaira = inputNaira.value * 0.0026;
        result.value = dollarNaira;
    }else if(select.value == 'nairaeuro') {
        const euroNaira = inputNaira.value * 0.0024;
        result.value = euroNaira;
    }else if(select.value == 'nairapound') {
        const poundNaira = inputNaira.value * 0.0021;
        result.value = poundNaira;
    }else if(select.value == 'dollarnaira') {
        const dollarToNaira = inputNaira.value * 385.61;
        result.value = dollarToNaira;
    }
    else if(select.value == 'euronaira') {
        const euroToNaira = inputNaira.value * 418.78;
        result.value = euroToNaira;
    }
    else if(select.value == 'poundnaira') {
        const poundToNaira = inputNaira.value * 480.51;
        result.value = poundToNaira;
    }
    else{
        console.log('No Result');
    }
    // Clear Em
    setTimeout(() => inputNaira.value = '', 8000);
    setTimeout(() => result.value  = '', 8000);
});
