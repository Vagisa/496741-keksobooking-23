const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не удалось получить данные. Попробуйте ещё раз');
      }
    })
    .then((ads) => {
      onSuccess(ads);
    }).catch(() => {
      onFail('Не удалось получить данные. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    }
  }).catch(() => {
    onFail('Не удалось отправить форму. Попробуйте ещё раз');
  });
};

export {getData, sendData};
