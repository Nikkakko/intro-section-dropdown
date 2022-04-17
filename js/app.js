document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');

  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.add('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

const container = document.querySelector('.container');
const menu = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar-nav');
const closeBtn = document.querySelector('.close');
const main = document.querySelector('.main');

const dropdownLinksA = document.querySelector('.side-link-a');
const dropdownLinksB = document.querySelector('.side-link-b');
const feature = document.querySelector('.side-dropdown-menu-feature');
const company = document.querySelector('.side-dropdown-menu-company');

dropdownLinksA.addEventListener('click', () => {
  feature.classList.toggle('active');
});
dropdownLinksB.addEventListener('click', () => {
  company.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  container.classList.remove('active');
});

menu.addEventListener('click', () => {
  sidebar.classList.add('active');
  container.classList.add('active');
});
