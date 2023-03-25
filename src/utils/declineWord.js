/**
 * Функция склонения слова относительно входного числа
 * @param {Number} number число относительно которого склоняют слово
 * @param {Array} wordForms массив форм слова в ед.числе именительном родительном падежах, во мн.числе родительном падеже
 * @returns форматированную строку
 */
export const declineWord = (number, wordForms) => {
  number = Math.abs(number) % 100;
  let num = number % 10;
  if (number > 10 && number < 20) return wordForms[2];
  if (num > 1 && num < 5) return wordForms[1];
  if (num === 1) return wordForms[0];
  return wordForms[2];
}
