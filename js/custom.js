(function() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
      menu.setAttribute('aria-expanded', 'true');
    } else {
      menu.setAttribute('aria-expanded', 'false');
    }
  });
})();

document.querySelectorAll('#nav .tab-control').forEach(function(navEl, index, navElArray) {
  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };

  navEl.onkeydown = function(event) {
    if (['ArrowLeft', 'Left', 'ArrowRight', 'Right', 'Home', 'End', 'Space', 'Enter'].includes(event.key)) {
      event.preventDefault();

      let currentActiveElement = navElArray[index];

      if (event.key === 'Enter' || event.key === 'Space') {
        return toggleTab(currentActiveElement.id, currentActiveElement.dataset.target);
      }

      if (event.key === 'ArrowRight') {
        currentActiveElement = index + 1 === navElArray.length ? navElArray[0] : navElArray[index + 1]
      }
  
      if (event.key === 'ArrowLeft') {
        currentActiveElement = index - 1 === -1 ? navElArray[navElArray.length - 1] : navElArray[index - 1]
      }
  
      if (event.key === 'Home') {
        currentActiveElement = navElArray[0];
      }
  
      if (event.key === 'End') {
        currentActiveElement = navElArray[navElArray.length - 1];
      }

      currentActiveElement.focus();

    }
  }
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll('#nav .tab-control');

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add('is-active');
      navEl.setAttribute('aria-selected', 'true');
      navEl.removeAttribute('tabindex');
    } else {
      if (navEl.classList.contains('is-active')) {
        navEl.classList.remove('is-active');
      }
      navEl.setAttribute('aria-selected', 'false');
      navEl.setAttribute('tabindex', '-1')
    }
  });

  var tabsPanels = document.querySelectorAll('.tab-pane');

  tabsPanels.forEach(function(tabPanel) {
    if (tabPanel.id == targetId) {
      tabPanel.style.display = 'block';
      tabPanel.setAttribute('aria-expanded', 'true');
    } else {
      tabPanel.style.display = 'none';
      tabPanel.setAttribute('aria-expanded', 'false');
    }
  });
}
