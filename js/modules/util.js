const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const ALERT_SHOW_TIME = 5000;

const getRandomArrayElement = (elements) =>
  elements[_.random(0, elements.length - 1)];

const isEscEvent = (evt) =>
  evt.key === 'Escape' || evt.key === 'Esc';

const isEnterEvent = (evt) =>
  evt.key === 'Enter';

const showAlert = (message) => {
  const errorMessage = errorTemplate.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = message;
  document.body.append(errorMessage);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt) || isEnterEvent(evt)) {
      errorMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    errorMessage.remove();
  });

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);

};

const showSuccess = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt) || isEnterEvent(evt)) {
      successMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    successMessage.remove();
  });

  setTimeout(() => {
    successMessage.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomArrayElement, isEscEvent, isEnterEvent, showAlert, showSuccess};
