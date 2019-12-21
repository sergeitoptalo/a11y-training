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

document.querySelectorAll('#nav .tab-control').forEach(function(navEl) {
  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll('#nav .tab-control');

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add('is-active');
      navEl.setAttribute('aria-selected', 'true');
    } else {
      if (navEl.classList.contains('is-active')) {
        navEl.classList.remove('is-active');
      }
      navEl.setAttribute('aria-selected', 'false');
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
