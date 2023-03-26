/**
 * Функция форматирования даты
 * @returns дата в формате YYYY.MM.DD
 */
export const getCurrentDate = () => new Date().toLocaleString('ru', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}).split('.').reverse().join('-')

/**
 * Функция форматирования даты
 * @returns дата в формате DD month YYYY
 */
export const getPrettyCurrentDate = () => new Date().toLocaleString('ru', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).slice(0, -3)
