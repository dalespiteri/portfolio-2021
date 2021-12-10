var typerFunction = function (element, string) {

    var listeningFunction = function () {
        var position = element.getBoundingClientRect();
        if (position.bottom <= (window.innerHeight - 150)) {
            window.removeEventListener('scroll', listeningFunction);
            var stringArray = string.split('');
            var mutatedString = '';
            stringArray.forEach(function (letter, index) {
                setTimeout(() => {
                    // add a new letter from the array for each iteration
                    mutatedString = mutatedString + letter;
                    // replace the text with the extended string
                    element.innerHTML = mutatedString;
                }, 50 * index);
            });
        }
    }
    window.addEventListener('scroll', listeningFunction);
}

var allEls = document.querySelectorAll('.typing-text');
allEls.forEach(function (el) {
    var typerString = el.dataset.typer;
    typerFunction(el, typerString);
})


AOS.init();