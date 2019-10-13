# sample-typescript-react-webpack

# webpack webpack cli html-webpack-plugin설치

`npm install --save-dev webpack webpack-cli html-webpack-plugin`

# react react-dom

`npm install --save react react-dom`

# react,react-dom type

`npm install --save-dev @types/react @types/react-dom`

# tyscript ts-loader source-map-loader

`npm install --save-dev typescript ts-loader source-map-loader`

# tslint

```
npm install --save-dev tslint
```

# react 사용시

```
npm install --save-dev tslint-react
```

# types 파일

```
npm install --save-dev @types/react @types/react-dom @types/react-redux @types/redux
```

# tslint-config-prettier(에디터에서 코드 자동 변경)

```
cmd shift p 눌러 setting 누른 후 “editor.formatOnSave”: true 로 변경

npm install prettier --save-dev
npm install --save-dev tslint-config-prettier
```

# tslint.json

```
{
  "extends": ["tslint", "tslint-react","tslint-config-prettier"],
  "rules": {
    "align": [true, "parameters", "statements"],
    "jsx-alignment": false,
    "ban": false,
    "class-name": true,
    "comment-format": [true, "check-space"],
    "curly": true,
    "eofline": false,
    "forin": true,
    "indent": [true, "spaces"],
    "interface-name": [false],
    "jsdoc-format": true,
    "jsx-no-lambda": false,
    "jsx-no-multiline-js": false,
    "label-position": true,
    "max-line-length": [true, 120],
    "member-ordering": [
      true,
      {
        "order": [
          "public-before-private",
          "static-before-instance",
          "variables-before-functions"
        ]
      }
    ],
    "no-any": false,
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "log",
      "error",
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-consecutive-blank-lines": true,
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-eval": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": false,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "quotemark": [true, "single", "jsx-double"],
    "radix": true,
    "semicolon": [false],
    "switch-default": true,

    "trailing-comma": [false],

    "triple-equals": [true, "allow-null-check"],
    "typedef": [true, "parameter", "property-declaration"],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-module",
      "check-operator",
      "check-separator",
      "check-type",
      "check-typecast"
    ]
  }
}
```

# tsconfig.json

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "removeComments": false,
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "keyofStringsOnly": true
  },
  "typeRoots": ["node_modules/@types", "src/@type"],
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "./node_modules/**/*"
  ],
  “plugins”: [{“name”: “typescript-tslint-plugin”}],
  "include": ["./src/**/*", "@type"]
}
```

# webpack.config.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//웹팩 실행 시 plugin에 설정한 html 파일 읽어서 설정한 경로로 index.html에 js 까지 추가해서 넣어줌

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  mode: 'development',

  // Enable sourcemaps for debugging webpack"s output.
  devtool: 'source-map',

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    //index: path.resolve(__dirname, './public/index.html'),
    port: 9000,
  },
  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      { test: /\.tsx?$/, loader: 'ts-loader' },

      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      //favicon: 'public/favicon.ico',
    }),
  ],
};

```

# .prettierrc

```
{
 "printWidth": 80,
 "tabWidth": 2,
 "singleQuote": true,
 "trailingComma": "es5",
 "semi": true,
 "newline-before-return": true,
 "no-duplicate-variable": [true, "check-parameters"],
 "no-var-keyword": true
}
```
