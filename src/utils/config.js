export const mainApiUrl = "https://api.nomoreparties.co";
export const baseUrl = "https://api.movie.murochkina.nomoredomains.xyz";

export const namePattern = /[a-z-. а-яё]+/g;
export const passwordPattern = /[0-9a-z-а-яё]+/g;
export const allowedSymbolsPattern = /[_~!@#$%^&*()[\]+`'';:<>/\\|=]/g;

export const validationErrorMessages = {
  name: "Имя содержит недопустимые символы. Имя может содержать латинские буквы, кириллицу, пробел и дефис.",
  email: "Введен некорректный формат эл.почты",
  password:
    "Пароль содержит недопустимые символы. Пароль может содержать цифры, латиницу, кириллицу, дефис.",
};

export const errorMessages = {
  409: "Пользователь с таким email уже существует",
  401: "Введен неправильный логин или пароль / пользователь не зарегистрирован",
  500: "Ошибка сервера",
  400: "Введены некорректные данные, проверьте правильность ввода данных",
};

export const changeWidth = (width) => {
  if (width <= 480) {
    return { _initCount: 5, _count: 2 };
  } else if (width <= 768) {
    return { _initCount: 8, _count: 2 };
  } else {
    return { _initCount: 12, _count: 3 };
  }
};
