# EPM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## installed third party packages
1. Bootstarp - version 3
2. chart.js
3. ngx-pagination

## Instructions to be followed after starting the aplication
VVI- Do not refresh the page once aplication get loaded, it will clear all the saved data in local storage

1. inside the terminal run this command -npm install
2. First go to setting page and add total budget and categories.
3. now on the home page you can add new expenses.
4. category wise split chart is visible till first five entry only.
5. every deleted entry is a soft delete. can be varified in object value.(if isDelete = 0 entry is deleted, if 1 entry is active )
6. on profile page user can see the deleted entries, and can undo the deleted entries once he click the plus(+) button.


