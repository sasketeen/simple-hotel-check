export const getCurrentDate = () => new Date().toLocaleString('ru', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}).split('.').reverse().join('-')
