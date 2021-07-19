const rooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const DEFAULT_ROOMS_NUMBER = 1;
const MAX_GUESTS = 100;
const NOT_FOR_GUESTS = 0;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MIN_PRICE_BY_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const limitGuestNumber = (roomsNumber) => {

  for (const capacityOption of capacity.options) {
    if (Number(roomsNumber) >= MAX_GUESTS) {
      capacityOption.disabled = Number(capacityOption.value) > NOT_FOR_GUESTS;
    } else {
      if (Number(capacityOption.value) === NOT_FOR_GUESTS) {
        capacityOption.disabled = true;
      } else {
        capacityOption.disabled = Number(capacityOption.value) > Number(roomsNumber);
      }
    }
  }
};

rooms.addEventListener('change', (event) => {
  const roomsNumber = event.target.value;
  if (rooms.value >= MAX_GUESTS) {
    capacity.value = NOT_FOR_GUESTS;
  } else if (capacity.value > rooms.value || Number(capacity.value) === 0) {
    capacity.value = rooms.value;
  }
  limitGuestNumber(roomsNumber);
});

limitGuestNumber(DEFAULT_ROOMS_NUMBER);

titleInput.addEventListener('input', () => {
  const titleLength = titleInput.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${titleLength - MAX_TITLE_LENGTH} симв.`);

  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});


priceInput.addEventListener('input', () => {
  const price = priceInput.value;
  const typeValue = typeSelect.value;
  if (price < MIN_PRICE_BY_TYPE[typeValue]) {
    priceInput.setCustomValidity(`Минимально возможная цена ${MIN_PRICE_BY_TYPE[typeValue]}`);
  } else if (price > MAX_PRICE) {
    priceInput.setCustomValidity(`Максимально возможная цена ${MAX_PRICE}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

typeSelect.addEventListener('change', () => {
  const minPrice = MIN_PRICE_BY_TYPE[typeSelect.value];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice;
});

timeInSelect.addEventListener('change', () => {
  timeOutSelect.value = timeInSelect.value;
});

timeOutSelect.addEventListener('change', () => {
  timeInSelect.value = timeOutSelect.value;
});
