 [![npm version](https://badge.fury.io/js/wonka-ui.svg)](https://badge.fury.io/js/wonka-ui)

# Angular wonka-ui - UI component library using Bulma CSS framework styles
wonka-ui is a front-end/user interface framework written in Angular and Typescript, aimed towards making front-end components and code re-usable within SINTEF Connect.

---

## Versions

| Angular| wonka-ui|
| ------|:------:| 
| >=8.0.0 <9.0.0  | v1.x |

---

Table of contents

  * [Components](#components)
  * [Getting started](#getting-started)
  * [Demo application](#demo-application)
  * [License](#license)
  
## Components
- [x] ChartModule - simple wrapper for chart.js
- [x] KeyValueUnitListModule - module for creating a simple key-value list
- [x] ListModule - module for creating a simple list, emits event on item click
- [x] TableModule - module for creating a simple table, emits event on row click
- [x] FormModule - simple reactive form 
- [x] InfoModule - info module with header, content and image
- [x] NavigationBarModule - simple navigation bar

## Warning
Library is under active development and may have API breaking changes for subsequent major versions after 1.0.0.

## Getting started
### Step 1: Install `wonka-ui`:

#### NPM
```shell
npm install --save wonka-ui
```
### Step 2: Import the chosen wonka-ui modules:
```js
import { NavigationBarModule, InfoPanelModule } from 'wonka-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [NavigationBarModule, InfoPanelModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
## Demo application
The github repository includes a demo application that demonstrates use of the wonka-ui modules.

### Run demo application on default port 4200
```
git clone https://github.com/SINTEF/wonka-ui.git
cd wonka-ui
npm install
cd projects/application/src
npm run start-demo
```
Open demo-app on http://localhost:4200
### Testing
```
npm run test
```

## License
Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a [Creative Commons Attribution 4.0 International
License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
=======
