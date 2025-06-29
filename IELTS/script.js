(function() {
    var targetDiv = document.querySelector('.buv-hello-world');
    if (targetDiv) {
        console.log('Hello World');
    }
})();

(function () {
    // Select all <article> elements with class "timer"
    var articles = document.querySelectorAll('article.timer');

    articles.forEach(function (article) {
        var details = article.querySelector('details');
        var duration = parseInt(article.getAttribute('data-duration'), 10) || 10;
        var closeTimeout;

        if (details) {
            // Listen for toggle event on <details>
            details.addEventListener('toggle', function () {
                // If it's being opened
                if (details.open) {
                    // Clear any previous timer
                    clearTimeout(closeTimeout);

                    // Set new timer to close it after 'duration' seconds
                    closeTimeout = setTimeout(function () {
                        details.open = false;
                    }, duration * 1000);
                } else {
                    // If manually closed, cancel the timer
                    clearTimeout(closeTimeout);
                }
            });
        }
    });
})();
