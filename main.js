const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn-wrapper .btn');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (event.target.innerText == 'AC') {
            screen.value = '';
        } else {
            screen.value += event.target.innerText;
        }
    })
}
document.getElementById('btn-equal').addEventListener('click', function () {
    screen.value = eval(screen.value);
})
function deleteLast() {
    var screenValue = document.getElementById("screen").value;
    document.getElementById("screen").value = screenValue.substr(0, screenValue.length - 1);
}
