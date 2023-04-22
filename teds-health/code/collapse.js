const collapseMenu = document.querySelector(".collapsible-menu-container");
const faqSection = document.querySelector(".faq-section");
const bodyElement = document.querySelector("html");
const bodyBaseHeight = bodyElement.offsetHeight;
const collapseMenuBaseHeight = collapseMenu.offsetHeight;

function bodyHeight() {
  bodyElement.style.height = `${bodyBaseHeight-collapseMenuBaseHeight+faqSection.offsetHeight}px`;
}

function faqSectionHeight() {
  faqSection.style.height = `${collapseMenu.offsetHeight+200}px`;
}

document.querySelectorAll('.collapse-control').forEach((item) => {
  item.addEventListener('click', () => {
    item.querySelector('.collapse-icon').classList.toggle('collapse-closed');
    item.nextElementSibling.classList.toggle('not-active');
    faqSectionHeight()
    bodyHeight()
  });
})