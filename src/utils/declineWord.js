/**
 * Функция склонения слова относительно входного числа
 * @param {Number} number число относительно которого склоняют слово
 * @param {[String]} wordForms массив форм слова в ед.числе именительном и родительном падежах, во мн.числе родительном падеже
 * @returns форматированная строку
 */
export const declineWord = (number, wordForms) => {
  number = Math.abs(number) % 100;
  let num = number % 10;
  if (number > 10 && number < 20) return wordForms[2];
  if (num > 1 && num < 5) return wordForms[1];
  if (num === 1) return wordForms[0];
  return wordForms[2];
}
