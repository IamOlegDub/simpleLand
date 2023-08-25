export const scrollToElement = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    const main = document.getElementById('main');
    const hero = document.getElementById('hero');
    const blockIDMain = main.getAttribute('href');

    if (blockIDMain === '/') {
        main.addEventListener('click', function (e) {
            e.preventDefault();
            hero.scrollIntoView({
                behavior: 'smooth',
            });
        });
    }
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').slice(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
            });
        });
    }
};
