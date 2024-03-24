import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
const savedState = JSON.parse(localStorage.getItem(localStorageKey));
const submit = document.querySelector('button');

if (savedState) {
  form.elements.email.value = savedState.email || "";
  form.elements.message.value = savedState.message || "";
}

form.addEventListener("input", throttle((evt) => {
  const currentState = {
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
}, 500));

submit.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value
  });
  localStorage.removeItem(localStorageKey);
});
