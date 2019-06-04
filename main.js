const tabs = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__content');

for (let i = 1; i <= tabs.length; i++) {
    tabs[i - 1].setAttribute('data-tab', `tab-${i}`);
    tabsContent[i - 1].classList.add(`tab-${i}`);
}

const tabSelectHandler = e => {
    let activeTabData = e.target.getAttribute('data-tab');

    tabs.forEach(item => {
        item.classList.remove('js-active');
    });

    e.target.classList.add('js-active');

    tabsContent.forEach(item => {
        item.classList.remove('js-active');

        if (item.classList.contains(activeTabData)) item.classList.add('js-active');
    });
};

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSelectHandler);
}