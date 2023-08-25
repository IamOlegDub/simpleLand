export const checkLocation = () => {
    function trackPageAddress() {
        const currentURLHash = window.location.hash;
        const pageId = document.getElementById('to-' + currentURLHash.slice(1));
        const mainPageId = document.getElementById('main');
        const elementsWithClass = document.querySelectorAll('.currentPageTag');
        elementsWithClass.forEach((element) => {
            element.classList.remove('currentPageTag');
        });
        if (!currentURLHash) {
            mainPageId.classList.add('currentPageTag');
        } else {
            pageId.classList.add('currentPageTag');
        }
    }

    // Виклик функції при завантаженні сторінки
    trackPageAddress();

    // Відслідковування зміни адреси сторінки (на зміну hash або path)
    window.addEventListener('hashchange', trackPageAddress);
    window.addEventListener('popstate', trackPageAddress);
};
