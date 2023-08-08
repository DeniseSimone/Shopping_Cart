const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


/* Show or hide navbar when click hamburger menu */
if (bar) { /* if nabvar is clicked */
  bar.addEventListener('click', () => {
    nav.classList.add('active');   
  })
}
if (close) { /* if nabvar is clicked */
  close.addEventListener('click', () => {
    nav.classList.remove('active');   
  })
}

/* PAGINATION */
