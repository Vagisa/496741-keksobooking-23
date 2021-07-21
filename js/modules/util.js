const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const isEscEvent = (evt) =>
  evt.key === 'Escape' || evt.key === 'Esc';

const isEnterEvent = (evt) =>
  evt.key === 'Enter';

const showMessage = (messageTemplate, messageParagraphClass, message) => {
  const messageElement = messageTemplate.cloneNode(true);
  if (message) {
    messageElement.querySelector(messageParagraphClass).textContent = message;
  }
  document.body.append(messageElement);
  let removeErrorMessage = null;

  const keyHandler = (evt) => {
    if (isEscEvent(evt) || isEnterEvent(evt)) {
      removeErrorMessage();
    }
  };

  const clickHandler = () => {
    removeErrorMessage();
  };

  document.addEventListener('keydown', keyHandler);
  document.addEventListener('click', clickHandler);

  const timeoutId = setTimeout(() => {
    removeErrorMessage();
  }, ALERT_SHOW_TIME);

  removeErrorMessage = () => {
    document.removeEventListener('keydown', keyHandler);
    document.removeEventListener('click', clickHandler);
    clearTimeout(timeoutId);
    messageElement.remove();
  };
};

const showAlert = (message) => {
  showMessage(errorTemplate, '.error__message', message);
};

const showSuccess = () => {
  showMessage(successTemplate);
};

export {isEscEvent, isEnterEvent, showAlert, showSuccess};
