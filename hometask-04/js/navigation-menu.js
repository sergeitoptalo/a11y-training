const menuTrigger = document.querySelector('.administration-menu-trigger');
const menuPanel = document.querySelector('.administration-menu');

menuTrigger.addEventListener('keydown', handleKeyDown);

let items;
let itemIndex = 0;

function handleKeyDown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();

    menuTrigger.setAttribute('aria-expanded', true);
    menuPanel.classList.add('expanded');

    items = menuPanel.querySelectorAll('.adm-menu-item');

    items[0].setAttribute('tabindex', 0);
    items[0].focus();

    menuPanel.addEventListener('keydown', handleKeysInMenu);
  }

  function handleKeysInMenu(event) {
    if (event.key === 'Escape' || event.key === 'Tab') {
        menuTrigger.setAttribute('aria-expanded', false);
        menuPanel.classList.remove('expanded');

        if (event.key === 'Escape') {
            menuTrigger.focus();
        }
        itemIndex = 0;
        menuPanel.removeEventListener('keydown', handleKeysInMenu);
      }

      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        clearItems();
        moveFocus(event.key)
      }

      if (event.key === ' ') {
        event.preventDefault();
        items[itemIndex].click();
      }
  }

  function moveFocus(key) {
    if (key === 'ArrowDown') {
      itemIndex = itemIndex + 1 === items.length ? 0 : itemIndex + 1;
    }

    if (key === 'ArrowUp') {
      itemIndex = itemIndex - 1 === -1 ? items.length - 1 : itemIndex - 1;
    }

    items[itemIndex].setAttribute('tabindex', '0');
    items[itemIndex].focus();
  }

  function clearItems() {
    items.forEach((item) => {
      item.setAttribute('tabindex', '-1');
    });
  }
}
