# CsHomeAssignment
CsHomeAssignment -> crXXXstrXXX home assignment

## Donwload and run the project in dev mode
Make sure you have latest stable Node.js intalled in your local-
* Run `npm -v`. I have '6.14.4' while developing this project.
* Download the zip of this project and unzip it.
* Go to the unzipped folder and Run `npm install`.
* Run `ng serve` in the same folder.
* Navigate to `http://localhost:4200/`.

## Project structure
* Reusable UI-KIT library -
	* `csha-ui-comp-lib` which means crXXXstrXXX ui component library.
	* It was initiated with angular CLI, command - `ng g library csha-ui-comp-lib --prefix=csha`
	* Here prefix 'csha' means crXXXstrXXX home assignment.
	* It can be published in a NPM repository and can be used in any other angular project.
	* `csha-ui-comp-lib` has the following reusable UI components
		* checkbox-v1
		* download-button-v1
		* Group of Grid components
			* grid-v1 - custom grid with any given column configuration.
			* grid-cell-renderer-v1 - custom cell renderer which can dynamically load any angular component inside a gid cell.
			* grid-row-selection-count-v1 - this can show count of selected row and can un-select or select-all rows of a grid.
* Main project for the App
	* It was initiated with angular CLI, command - `ng new cs-home-assignment --prefix=csha`
	* It has the main page component - `device-grid-page` which used the `csha-ui-comp-lib` components to render the final outcome.
* All the components are initiated with angular CLI commands. So there are auto  generated .spec files not doing much tests. I couldn't get much time to write the component tests.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

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
