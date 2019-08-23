var mobileButtonNav = document.querySelector('.button__navigation');
var mobileButtonSearch = document.querySelector('.button__search');
var mobileNavDrawer = document.querySelector('.mobile-nav__drawer');
var closeMenuButton = document.querySelector('.close-menu');

mobileButtonNav.addEventListener('click', function toggleMenu(){
    mobileButtonNav.classList.toggle('button--active');
    mobileButtonSearch.classList.remove('button--active');

    mobileNavDrawer.classList.toggle('drawer--navigation-open');
    mobileNavDrawer.classList.remove('drawer--search-open');
});

mobileButtonSearch.addEventListener('click', function toggleMenu(){
    mobileButtonSearch.classList.toggle('button--active');
    mobileButtonNav.classList.remove('button--active');

    mobileNavDrawer.classList.toggle('drawer--search-open');
    mobileNavDrawer.classList.remove('drawer--navigation-open');
});

closeMenuButton.addEventListener('click', function toggleMenu(){
    mobileButtonNav.classList.remove('button--active');
    mobileButtonSearch.classList.remove('button--active');

    mobileNavDrawer.classList.remove('drawer--navigation-open');
    mobileNavDrawer.classList.remove('drawer--search-open');
});

// Find the 'select all' checkbox
var checkboxSelectAll = document.querySelectorAll('.checkboxSelectAll');
// Return all the clickboxes in the table
var itemCheckbox = document.querySelectorAll('.filter__checkbox');

// If the 'select all' checkbox is clicked
checkboxSelectAll.forEach( element => {
  element.addEventListener('click', function toggleCheckboxes(){
    itemCheckbox.forEach( checkbox => {
        // Toggle the checked state of each row's checkbox
        checkbox.checked = element.checked;
    });
  });
});