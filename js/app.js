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
const topArrow = document.getElementById("scroll__top");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//build out the menu 
const buildListItems = (section) => {
  const listElement = document.createElement("li");
  listElement.innerHTML = section.getAttribute("data-nav");
  listElement.classList.add("menu__link");
  navUl.appendChild(listElement);
};
//check if an element is in view
const isInView = (section) => {
  const sectionPosition = section.getBoundingClientRect();
  if (
    window.pageYOffset >= (sectionPosition.top + window.pageYOffset - navUl.offsetHeight) &&
    window.pageYOffset <= (sectionPosition.bottom + window.pageYOffset - navUl.offsetHeight)
  ) {
    return true;
  }
};
//match the auto generated sections of the nav to the body sections with data navs
const matchNavToSection = (nav) => {
  const linkName = nav.innerHTML;
  const anchorPoint = document.querySelector(`[data-nav="${linkName}"]`);
  return anchorPoint;
};

//hide any element when youre near the top of the page
const hideOnTop = (elem) => {
  if (window.pageYOffset <= 50) {
    elem.style.display = "none";
  } else {
    elem.style.display = "block";
  }
};
//use any elent to scroll to the top of the page with a click
const scrollToTop = (elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
  buildListItems(section);
});
//nav items cant be grabbed until the are created
const navItems = document.querySelectorAll(".menu__link");

/*end main functions
 *
 *
 * begin events
 */


/* Add class 'active' to section when near top of viewport
    on each scroll remove active class to make sure no conflicts arise
    match the nav to its section
    check if section is in view
    add the active class styling
    also on scroll hide the to top arrow when your already on top
*/
window.addEventListener("scroll", (e) => {
  navItems.forEach((item) => {
    item.classList.remove("your-active-class");
    const currentSection = matchNavToSection(item);
    if (isInView(currentSection)) {
      item.classList.add("your-active-class");
    }
    hideOnTop(topArrow);
  });
});
/* Scroll to anchor ID using scrollTO event
    select all the newly made nav items from the menu
    match the nav item text to the sections which were originally taken from the section data nav
    listen to the nav items for clicks
    using the getboundingclientrect function scroll to the location of the elements using the scroll to function
    add scoll to top functionality to the top arrow
*/

navItems.forEach((navItem) => {
  const anchorPosition = matchNavToSection(navItem).getBoundingClientRect();
  navItem.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: anchorPosition.top + 10,
      left: anchorPosition.left,
      behavior: "smooth",
    });
  });  
});

scrollToTop(topArrow);

