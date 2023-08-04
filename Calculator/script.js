let time = document.getElementById('showTime');
let getTime = new Date();
time.innerHTML = getTime.getHours() + ":" + getTime.getMinutes();

let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            let value = string;
            if (value === '1+') {
                string = `NeverSettle`;
                document.querySelector('input').value = string;
                document.querySelector('input').style.background = 'red';
            } else {
                string = eval(string);
                document.querySelector('input').value = string;
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            document.querySelector('input').value = string;
            document.querySelector('input').style.background = 'gray';
        } else if (e.target.innerHTML === 'x') {
            let val = string.slice(0, -1).trim();
            string = val;
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});