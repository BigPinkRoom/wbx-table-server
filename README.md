# wbx-table-server. Node.js сервер для <a href="https://github.com/BigPinkRoom/wbx-table-client">wbx-table-client</a>

## Сервер находится <a href="https://wbx-table-server.herokuapp.com">здесь</a>

## Особенности

- Сервер расположен на бесплатном тарифе Heroku, поэтому "засыпает" каждые 30 минут. Первый запуск сервера может занимать до 15 секунд.

## Функционал

- При get-запросе на <a href="https://wbx-table-server.herokuapp.com/api/table">https://wbx-table-server.herokuapp.com/api/table</a>, сервер отдаёт тестовые данные для клиента.
- Данные возвращаются из БД на MongoDB.

### При разработке пользовался:

- Node.js
- Express
- MongoDB
- Mongoose
- Helmet
- Nodemon

## Настройка проекта и установка необходимых пакетов

```
npm install
```

### Компиляция и запуск в режиме разработки

```
npm run dev
```

### Компиляция и запуск

```
npm run start
```
