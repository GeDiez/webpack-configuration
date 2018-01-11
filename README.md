# My Webpack configuration

Webpack configuration with wepack-dev-server for enviroments development and production

## Getting Started

```
  git clone https://github.com/GeDiez/webpack-configuration.git
```

### Prerequisites

you need install:
* nodejs
* npm
* SO mac or linux (terminal)

### Installing

you might clone de repository on your local and getting start:
* ```  yarn ```
or
* ``` npm install ```

you migth modify webpack.dll.js with your common dependencies, the array object has the dependencies
that never change like react, redux, react-dom
```
entry: {
    modules: ['react', 'react-dom'],
  },
```
when you have all your dependencies added, run the next command on your terminal:

```
yarn run webpack:dll or npm run webpack:dll
```
it will generate two new files on your project
* build/javascript/modules.js
* modules-manifest.json

note: the configuration above is apply only once but if you update some dependencie like react you might
run the build again

the following steps let you get a fast and simply webpack configuration to enviroments to both development and production

#### mode developmet

  Have a weppack-dev-server runnign on port 9000
  ...

#### mode developmet

## Built With

  comands for yarn o npm
  generate a build of webapp folder with our javascripts, css, images, jsx files
  ```
    yarn run build:webapp
  ```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use git.

## Authors



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

