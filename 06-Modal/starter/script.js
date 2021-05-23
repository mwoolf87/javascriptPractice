'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//in the below example the function is defined and the event object is passed in as an argument. 'Escape' is the event key being triggered and if the event is equal to 'Escape' then the modal will close using the function above
document.addEventListener('keydown', e => {
  //if the e.key is equal to escape and if the modal does NOT contain the class 'hidden' then, close the modal/
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
