

document.addEventListener("DOMContentLoaded", function(event) {
    let form = document.querySelector('form.fibonacci'),
        result = document.querySelector('section.result');
    initFibonacci(form, result);
});

function initFibonacci(form, result) {
    let input = document.querySelector('form.fibonacci input.count');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        let sequence = [];
        let count = input.value;
        let html = '<ul>';

        let first = 1,
            second = 1,
            current = 1;

        for (let i = 0; i < count; i++) {
            sequence.push(current);

            if (isFinite(current)) {
                html += '<li>' + current + '</li>';
            } else {
                html += '<li class="infinity"><a href="buzz.html">' + current + '</a></li>';
                break;
            }

            current = first + second;
            second = first;
            first = current;
        }

        html += '</ul>';
        result.innerHTML += html;
        document.body.classList.add("submitted");

        initFibonacciCanvas(sequence);
    });

    input.addEventListener('keydown', function(e) {
        document.body.classList.remove("submitted");
        result.innerHTML = '';
    });
}

function initFibonacciCanvas(sequence) {

}
