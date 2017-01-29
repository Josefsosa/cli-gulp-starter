## Angular 2 Power Up

A small Angular 2 Power Up starter app with Gulp, Webpack and Karma unit testing.

## Introduction

Welcome to Angular 2 Power Up!

## Prerequisites

You need to have Node.js and npm
•Support Node v4 - latest
•Support npm v3 - latest

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
 
▒▒▒▒e2e
▒▒▒▒gulp
▒   ▒▒▒▒node
▒   ▒▒▒▒profiles
▒   ▒▒▒▒reports
▒   ▒   ▒▒▒▒accessibility
▒   ▒   ▒▒▒▒duplicate
▒   ▒   ▒▒▒▒html-validator
▒   ▒   ▒▒▒▒pdl
▒   ▒   ▒▒▒▒seo
▒   ▒   ▒▒▒▒tslint
▒   ▒▒▒▒sitemap
▒   ▒▒▒▒state-generator
▒   ▒▒▒▒utils
▒▒▒▒node_modules
▒▒▒▒src
    ▒▒▒▒app
    ▒   ▒▒▒▒common-modules
    ▒   ▒   ▒▒▒▒constant
    ▒   ▒   ▒▒▒▒navbar-module
    ▒   ▒▒▒▒home
    ▒   ▒▒▒▒todolist
    ▒   ▒▒▒▒weather
    ▒▒▒▒assets
    ▒   ▒▒▒▒fonts
    ▒   ▒   ▒▒▒▒Roboto
    ▒   ▒▒▒▒images
    ▒   ▒▒▒▒styles
    ▒▒▒▒environments

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

## TODO Tasks

### Reporting

**Assigned: TBD**

#### Add The Reporting framework Code Configuration
- [x] JCPD Copy Paste Detection
- [x] Complexity Report (Optional)

## Backlog of functionality remaining
  
      Type	Story											                    PTS
- [ ] DOC		DOC - PDL/Analytics for NG 2 Architecture		3
- [ ] DEV		DEV - PDL/Analytics for NG 2 Architecture		5
- [ ] DOC		DOC - Search on the CSL-WebPlatform				3
- [ ] DEV		DEV - Search on the CSL-WebPlatform				5
- [ ] DOC		DOC - AEM/NG Authoring Patterns & Guidelines	3
- [ ] DEV 	DEV - AEM/NG Authoring Patterns Implementation	5
- [ ] DEV		DEV - Authentication OAuth2 Integration			5
- [ ] DEV		DEV - Angular 2 / AEM 6.X Interaction patterns	5
- [ ] DOC		DOC – AEM NG 2 Page Personalization				3
- [ ] DEV		DEV – AEM NG 2 Page Personalization				5
- [ ] DOC		DOC - Angular 2.0 and CQ5.6 Support				5
- [ ] DEV		DEV- AEM CQ6 and NG2 for CMS platform			5
- [ ] DOC		DOC- Angular 2.0 Component Architecture			3
- [ ] DOC		DOC- UI NG 2.0 Performance Best Practices		5
- [ ] DOC		DOC - 2.0 TS E2E & Unit Testing Guidelines		3
- [ ] DOC		DOC - 2.0 TS Development Guidelines				3
- [ ] DOC		DOC - API needed CSL-Platform team for NG UI	3
- [ ] DEV		DEV - API needed CSL-Platform team for NG UI	5
- [ ] DOC		DOC - IDE Recommendation						3
- [ ] DOC		DOC – AEM Preview Environment					3
- [ ] DEV		DEV – AEM Preview Environment					5
- [ ] DOC		DOC – NG 2.0 Security Architecture				3
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

 


