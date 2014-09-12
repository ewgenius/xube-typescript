# Xube engine

3D framework, writing in typescript over [THREE.js](http://threejs.org/) library.
Inspired by XNA and [MonoGame](https://github.com/mono/MonoGame)

## links

* [typescript](http://www.typescriptlang.org/)

## examples:

* [test 1](http://ewgenius.github.io/xube-typescript/examples/test/)

## For start

### 1. dependecies
```
#!bash
sudo npm install typescript -g
sudo npm install bower -g
sudo npm install grunt-cli -g
npm install
bower install

```

### 2. compile
```
#!bash
grunt // only library (/build/xube.js)
grunt --target=test // compile example (/examples/test/)

```