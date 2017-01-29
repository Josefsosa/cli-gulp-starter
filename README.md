## Angular 2 Power Up

A small Angular 2 Power Up starter app with Gulp, Webpack and Karma unit testing.

## Introduction

Welcome to Angular 2 Power Up!

## Prerequisites

You need to have Node.js and npm as well as nvm 
- Support Node v4 - latest
- Support npm v3 - latest

## Installation

Clone the repository, cd into the directory, and install the dependencies:
https://github.com/Josefsosa/cli-gulp-starter

```
git clone https://github.com/Josefsosa/cli-gulp-starter.git
```

```
npm install
```

## Gitflow

Use the Gitflow to work on this project:
- Clone the repo from the dev branch
- Create a new local branch to work on
- Check in and add comments to changes on local branch
- Push new local branch to remote on Newsource/bitbucket/github 
- Do a pull request of your changes to the Dev branch 

If all changes are good on dev branch Admin or someone from the Architecture team will merge into Master.  
All Master merges from Dev branch will be rebased to remove history.

## Architecture and file structure 
This project is configured to use a recursive module/component system 
 
```
e-services/
  ├──gulp/                      * Gulp Folder
  │   ├──node/                  * WebApp: folder
  │   │   ├──app.spec.ts        * a simple test of
  |   ├──helpers.js             * helper functions for our configuration files
  |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
  |   ├──karma.conf.js          * karma config for our unit tests
  |   ├──protractor.conf.js     * protractor config for our end-to-end tests
  │   ├──webpack.dev.js         * our development webpack config
  │   ├──webpack.prod.js        * our production webpack config
  │   └──webpack.test.js        * our testing webpack config
  │   ├──reports                * a Reports folder
  │
  ├──src/                       * our source files that will be compiled to javascript
  |   ├──main.browser.ts        * our entry file for our browser environment
  │   │
  |   ├──index.html             * Index.html: where we generate our index page
  │   │
  |   ├──polyfills.ts           * our polyfills file
  │   │
  |   ├──vendor.browser.ts      * our vendor file
  │   │
  │   ├──app/                   * WebApp: folder
  │   │   ├──app.spec.ts        * a simple test of components in app.ts
  │   │   ├──app.e2e.ts         * a simple end-to-end test for /
  │   │   └──app.ts             * App.ts: a simple version of our App component components
  │   │
  │   └──assets/                * static assets are served here
  │       ├──icon/              * our list of icons from www.favicon-generator.org
  │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
  │       ├──robots.txt         * for search engines to crawl your website
  │       └──humans.txt          * for humans to know who the developers are
  │
  │
  ├──tslint.json                * typescript lint config
  ├──typedoc.json               * typescript documentation generator
  ├──tsconfig.json              * config that webpack uses for typescript
  ├──package.json               * what npm uses to manage it's dependencies
  └──webpack.config.js          * webpack main configuration file
```
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve`.

## Running Reports Reports (coming soon) 

Run `gulp reports` to execute the all of the current reports. 

## Hot Module Replacement

The following files and naming conventions have HMR turned on in dev:
 - Modules with file names ending in `.modules.ts`
 - Components ending in `.components.ts`

The following files are required through the loader, but refresh the browser (as they are configuration):
 - Components ending in `.components.ts`

## Notes

We are using the CLI to generate new Module/Components/routers and pipes Only

This command starts the ng serve and gulp 
"g-start": "start ng serve && start gulp"

## TODO Tasks

### Reporting

**Assigned: TBD**

#### Add The Reporting framework Code Configuration

```
Report Name	                      Description
- [x] Complexity Report A code complexity report to 
- [ ] JCPD Duplicate Report	This report Isolates duplicated code in the TS/JS code base.
- [ ] Accessibility Report	The Accessibility report give us a WCAG “A”-”AAA” pass fail status of the rendered page UI for developers to use to fix CSS/UI errors and issues before the app reaches UAT.
- [ ] Speet IO Webcoach 	The speed.IO reports on page rendering performance metrics.
- [ ] TSLint Report	The TS-Lint Report Give us the code quality report for the code base per every TS file. 
- [ ] PDL report	The “PDL” Page Data Layer Report provides a per state/URL rendered values of configured page data such as page name, page type, order and customer data.
- [ ] Html Validator report	The HTML validator report provides instrumentation of the HTML validity according to W3C standards so Developers can capture and fix error
- [ ] SEO Checker report	The SEO Checker report provide a per state/url rendered values of configurable SEO values Such as Meta description, Meta robots, page description Canonical Links, H1-H5 Heading values etc… 
- [ ] Coverage Report	The Coverage Report give us insight into the how much Unit Testing work has been completed for the app in the Code base.
- [ ] NG Documentation	NG Documentation provides us an in code documentation methodology that generates all the Source code documentation.
```

## Backlog of functionality remaining
```  
      Type	Story											                    PTS
- [ ] DOC		DOC - PDL/Analytics for NG 2 Architecture		    3
- [ ] DEV		DEV - PDL/Analytics for NG 2 Architecture		    5
- [ ] DOC		DOC - Search on the CSL-WebPlatform				      3
- [ ] DEV		DEV - Search on the CSL-WebPlatform				      5
- [ ] DOC		DOC - AEM/NG Authoring Patterns & Guidelines	  3
- [ ] DEV 	DEV - AEM/NG Authoring Patterns Implementation	5
- [ ] DEV		DEV - Authentication OAuth2 Integration			    5
- [ ] DEV		DEV - Angular 2 / AEM 6.X Interaction patterns	5
- [ ] DOC		DOC – AEM NG 2 Page Personalization				      3
- [ ] DEV		DEV – AEM NG 2 Page Personalization				      5
- [ ] DOC		DOC - Angular 2.0 and CQ5.6 Support				      5
- [ ] DEV		DEV- AEM CQ6 and NG2 for CMS platform			      5
- [ ] DOC		DOC- Angular 2.0 Component Architecture			    3
- [ ] DOC		DOC- UI NG 2.0 Performance Best Practices		    5
- [ ] DOC		DOC - 2.0 TS E2E & Unit Testing Guidelines		  3
- [ ] DOC		DOC - 2.0 TS Development Guidelines				      3
- [ ] DOC		DOC - API needed CSL-Platform team for NG UI	  3
- [ ] DEV		DEV - API needed CSL-Platform team for NG UI	  5
- [ ] DOC		DOC - IDE Recommendation						            3
- [ ] DOC		DOC – AEM Preview Environment					          3
- [ ] DEV		DEV – AEM Preview Environment					          5
- [ ] DOC		DOC – NG 2.0 Security Architecture				        3
- [ ] DEV		DEV - Authentication OAuth2 Integration			    5
- [ ] DOC		DOC – NG 2.0 Data persistence					          3
- [ ] DEV		DEV – NG 2.0 Protected Routes					          5
- [ ] DOC		DOC – NG 2.0 Sanky Graph API Reporting			      3
- [ ] DOC		DOC - 2.0 TS E2E & Unit Testing Guidelines		  5
- [ ] DOC		DOC - Adobe Marketing Cloud Integration			    5
- [ ] DOC		DOC - CDN Integration							              3
- [ ] DOC		DOC - Modularize 3rd Party integration 			    3
- [ ] DOC		DOC - NativeScript export to mobile app			    3
- [ ] DOC		DOC - Angular Material 2 for Accessibility		  3
- [ ] DOC		DOC - AME/NG Preview Environment				        3
- [ ] DEV		DEV - Components Performance Report Slow/Comps  5
```
 
