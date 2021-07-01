const checksPresenceContent = (content, selector) => {
  if (!content || content==='') {
    console.log('сработала проверка');
    document.querySelector(selector).classList.add('visually-hidden');
  }
  return content;
};

export {checksPresenceContent};
