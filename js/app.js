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
const scrollToTop = document.getElementById("scroll__top")

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const buildListItems = (section) => {
  const listElement = document.createElement("li");
  listElement.innerHTML = section.getAttribute("data-nav");
  listElement.classList.add("menu__link");
  navUl.appendChild(listElement);
};

const isInView = (section) => {
  const sectionPosition = section.getBoundingClientRect();
  if (
    window.pageYOffset >= sectionPosition.top + window.pageYOffset &&
    window.pageYOffset <= sectionPosition.bottom + window.pageYOffset
  ) {
    return true;
  }
};

const matchNavToSection = (nav) => {
  const linkName = nav.innerHTML;
  const anchorPoint = document.querySelector(`[data-nav="${linkName}"]`);
  return anchorPoint;
};
const hideOnTop = (elem) => {
  if (window.pageYOffset <= 50){
    elem.style.display = "none";
  }else{
    elem.style.display = "block";
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
  buildListItems(section);
});

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", (e) => {
  navItems.forEach((item) => {
    item.classList.remove("your-active-class");
    const currentSection = matchNavToSection(item);
    if (isInView(currentSection)) {
      item.classList.add("your-active-class");
    }
    hideOnTop(scrollToTop);
  });
});
// Scroll to anchor ID using scrollTO event
const navItems = document.querySelectorAll(".menu__link");
navItems.forEach((navItem) => {
  const linkName = navItem.innerHTML;
  const anchorPoint = document.querySelector(`[data-nav="${linkName}"]`);
  const anchorPosition = anchorPoint.getBoundingClientRect();
  navItem.addEventListener("click", (e) => {
    window.scrollTo({
      top: anchorPosition.top + 10,
      left: anchorPosition.left,
      behavior: "smooth",
    });
  });
});
scrollToTop.addEventListener("click", (e) =>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as 21`

//hide scroll to top button when not at top
