const items = document.querySelectorAll('.news-item');

function revealOnScroll() {
  items.forEach(item => {
    const slideInAt = window.scrollY + window.innerHeight - item.offsetHeight / 3;
    const itemBottom = item.offsetTop + item.offsetHeight;

    const isVisible = slideInAt > item.offsetTop && window.scrollY < itemBottom;

    if (isVisible) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

