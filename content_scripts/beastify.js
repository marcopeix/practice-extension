(function() {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function insertBeasts(beastURL) {
        removeExistingBeasts();
        let beastImage = document.createElement('img');
        beastImage.setAttribute('src', beastURL);
        beastImage.style.height = '100vh';
        beastImage.className = 'beastify-image';
        document.body.appendChild(beastImage);
    }

    function removeExistingBeasts() {
        let existingBeasts = document.querySelectorAll('.beastify-image');
        for (let beasts of existingBeasts) {
            beasts.remove();
        }
    }

    browser.runtime.onMessage.addListener((message) => {
        if(message.command === 'beastify') {
            insertBeasts(message.beastURL);
        } else if (message.command === 'reset') {
            removeExistingBeasts();
        }
    });
    
})();