const form = document.getElementById('feedback-form');

// Add functionality to display selected rating
const ratingContainer = document.querySelector('.rating-container');
ratingContainer.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LABEL') {
    const rating = clickedElement.htmlFor.split('-')[1];
    document.querySelector('input[name="rating"][value="' + rating + '"]').checked = true;
    clickedElement.classList.add('checked');
    const siblings = clickedElement.parentElement.querySelectorAll('label');
    for (let sibling of siblings) {
      sibling.classList.remove('checked');
    }
  }
});



