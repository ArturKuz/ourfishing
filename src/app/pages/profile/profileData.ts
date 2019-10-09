export const PROFILE_INPUTS = [
  {
    input: 'firstName',
    name: 'Имя',
    type: 'text',
    placeholder: 'Иван',
    errorPattern: 'Только буквы(русский), без пробелов'
  },
  {
    input: 'lastName',
    name: 'Фамилия',
    type: 'text',
    placeholder: 'Перов',
    errorPattern: 'Только буквы(русский), без пробелов'
  },
  {
    input: 'phoneNumber',
    name: 'Телефон',
    type: 'text',
    placeholder: '+ ...',
    errorPattern: ' Только цифры, без пробелов'
  },
  {
    input: 'email',
    name: 'Email',
    type: 'email',
    placeholder: 'email@email.com',
    errorEmail: 'Не корректный Email'
  }
];
