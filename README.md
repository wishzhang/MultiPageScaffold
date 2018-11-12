# multipage-scaffold

> vue多页面脚手架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 代码文件目录
- src/
  - assets/         公共资源
  - components/     公共组件
  - pages/           存放页面
      - test/       注意：不可再嵌套文件夹（未配置)
        - main.js  规定入口文件名只能是main.js
        - index.html
- static 打包需要用到的文件夹，将打包后的一些资源放在该文件夹


### 注意
开发环境下访问示例：http://localhost:8080/pages/index/
