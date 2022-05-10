/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("[data-nav]");
const navUl = document.getElementById("navbar__list");

console.log(sections);


/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach(section =>{
  const listElement = document.createElement('li')
  listElement.innerHTML = section.getAttribute('data-nav');
  listElement.classList.add("menu__link");
  navUl.appendChild(listElement);
  
})
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
const navItems = document.querySelectorAll('.menu__link');
navItems.forEach(navItem => {
  const linkName = navItem.innerHTML;
  const anchorPoint = document.querySelector(`[data-nav="${linkName}"]`)
  console.log(anchorPoint)
  navItem.addEventListener('click', (e) =>{
    console.log(e.target)
    anchorPoint.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
})
console.log(navItems)
/** 
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
