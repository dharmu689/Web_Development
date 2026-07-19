const button = document.querySelector('button');

button.addEventListener('click', () => {

    const input1 = Number(document.getElementById('input').value);
    const input2 = Number(document.getElementById('input2').value);

    if(isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers in both input fields.");
        return;
    }

    const result = input1 + input2;

    const re = document.getElementById('result');
    re.textContent = "Result: " + result;

})


//BMI Calculator

