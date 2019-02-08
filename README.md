#Angular

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 7.0.3.

# Poseidon

We are using  Prime Faces - PrimeNG Framework with a custom template named "Poseidon"

All PrimeNG components can be used and all Poseidon examples can be consulted on
"https://www.primefaces.org/poseidon-ng/#/"

Or inside the project folder, on "src/app/app.routes.ts" you can found the routes for poseidon samples.

Example:

"http://localhost:4200/#/sample"

##Install dependencies

Run `npm install` to install dependencies on `package.json` file.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

Options for Generate:

--spec true/false
Specifies if a spec file is generated. 

--inline-template (alias: -t)
Specifies if the template will be in the ts file

 --inline-style (alias: -s)
Specifies if the style will be in the ts file. 

--view-encapsulation (alias: -v) 
Specifies the view encapsulation strategy.

 --flat
Flag to indicate if a dir is created.

--export
Specifies if declaring module exports the component. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Custom folder to Images and assets

There's a custom directory for images and assets, store custom content there.

path:(`./src/assets/layout/images/audsat-images/`)

## File to overwrite PrimeNg styles and add custom styles

There's a custom layout and theme named `layout-audsat.scss` and `theme-audsat.scss`.  To add custom styles and overwrite PrimeNG custom classes use `styles.scss`.

path:(`./src/styles.scss`)

## Observation

When the project was started we were changing PrimeNG styles on 
path:(`./src/assets/layout/css/layout-audsat.scss`) and path:(`./src/assets/theme/theme-audsat.scss`)

but there is no Problem on changing the PrimeNG files on 
path:(`./src/assets/sass/layout`) and path:(`./src/assets/sass/theme`)



