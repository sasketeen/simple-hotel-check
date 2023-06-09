# Тестовый проект по поиску отелей
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Описание
Данный проект представляет собой небольшое SPA со страницей входа и поиска отелей в заданном городе на определенную дату.  
Ссылка не деплой: https://sasketeen.github.io/simple-hotel-check/

Стек технологий:
* React (RCA)
* React router
* Redux ToolKit + Redux Saga

Реализованный функционал: 
* авторизция
* поиск 
* добавление результата поиска в избранное
* сортировка
* валидация формы входа

Особенности проекта: 
* данные сохраняются в глобальный стейт
* страница поиска защищена от неавторизованных пользователей. Авторизация не сбрасывается после перезагрузки страницы
* избранные отели не сбрасываются при новом запросе
* избранные отели можно сортировтаь по цене и звездности
* стилизация полосы прокрутки (работает только для WebKit)

Что можно улучшить:
* по заданию нужно было реализовать лишь десктоп версию, но опционально можно добавить и мобильную (сейчас минимальная ширина задана 1000px)
* добавить обработку ошибок запросов
* добавить компонент select с api для списка городов, чтобы пользователь мог выбрать город при вводе первых символов, а не полностью вводить его название
* добавить страницу 404
