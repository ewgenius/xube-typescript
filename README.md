# Xube engine

## ссылки

* [typescript](http://www.typescriptlang.org/)

## примеры:

* [test 1](http://ewgenius.github.io/xube-typescript/examples/test/)

## Для запуска

### 1. Зависимости проекта
```
#!bash
sudo npm install typescript -g
sudo npm install bower -g
sudo npm install grunt-cli -g
npm install
bower install

```

### 2. Компиляция скриптов
```
#!bash
grunt // компиляция библиотеки (/build/xube.js)
grunt --target=test // компиляция примера (/examples/test/)

```

### 3. Запуск
```
#!bash
python -m SimpleHTTPServer

```