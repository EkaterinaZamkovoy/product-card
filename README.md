# 🛒 ProductCard — тестовое задание

Карточка товара на React + TypeScript с адаптивной вёрсткой и форматированием
цены через `Intl.NumberFormat`.

## 🔧 Стек технологий

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules

## 💡 Возможности

- Принимает через `props`:
  - Название товара (`title`)
  - Страну происхождения (`origin`)
  - Цену в копейках (`price`) и валюту (`currency`)
  - Картинку (`imageUrl`)
- Форматирует цену с помощью `Intl.NumberFormat`
- Адаптивность: при ширине экрана `< 500px` карточка выстраивается в колонку

## 📦 Установка и запуск

```bash

cd product-card
npm install
npm run dev
```
