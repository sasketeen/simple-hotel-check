export const getCurrentDate = () => new Date().toLocaleString('ru', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}).split('.').reverse().join('-')

export const getPrettyCurrentDate = () => new Date().toLocaleString('ru', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).slice(0,-3)
