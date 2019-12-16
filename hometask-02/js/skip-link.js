const keys = {
    enter: 'Enter',
    escape: 'Escape',
    tab: 'Tab',
    up: 'ArrowUp',
    down: 'ArrowDown',
};

const skipLinkContainer = document.querySelector('#skip-link-container');
const skipLinkTrigger = document.querySelector('#skip-link-trigger');

let skipLinkPanel;
let opened = false;
let skipToItems;
let order = 0;

if (skipLinkContainer) {
    skipLinkContainer.addEventListener('keydown', openSkipOptions);
    skipLinkPanel = document.querySelector(skipLinkTrigger.dataset.targetSelector);
}

function openSkipOptions(event) {
    if (event.key === keys.enter) {
        if (opened) {
            clearData();
        } else {
            skipLinkPanel.classList.add('expanded');
            skipLinkTrigger.setAttribute('aria-expanded', true);
            opened = true;
            skipToItems = skipLinkPanel.querySelectorAll('a');
        }
    }

    if (event.key === keys.escape) {
        clearData();
    }

    if (event.key === keys.tab && opened) {
        clearData();
    }

    if (event.key === keys.down) {
        event.preventDefault();
        skipToItems[order].focus();
        order = order + 1 === skipToItems.length ? 0 : order += 1;
    }

    if (event.key === keys.up) {
        event.preventDefault();
        skipToItems[skipToItems.length - 1 - order].focus();
        order = skipToItems.length - 1 - order <= 0 ? 0 : order += 1;
    }

    function clearData() {
        skipLinkPanel.classList.remove('expanded');
        skipLinkTrigger.setAttribute('aria-expanded', false);
        opened = false;
        order = 0;
    }
}
