<h2 align="center">Nick's Notes</h2>

[![Website Status](https://img.shields.io/website?down_color=critical&down_message=down&up_color=success&up_message=online&url=https%3A%2F%2Fnotes.nickbelzer.me)](https://notes.nickbelzer.me)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This repository contains the source code for the knowledge repository hosted at [notes.nickbelzer.me](https://notes.nickbelzer.me).

## Getting started

These instructions should get you started running a local copy on your own machine.


## Prerequisites
* [Ruby](https://www.ruby-lang.org/en/)
  - You can install it through brew (`brew install ruby`) on MacOS.
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
  - You can install both through: `gem install bundler jekyll`.
* [Node.js](https://nodejs.org/en/)
  - Personally I manage my node versions through [n](https://github.com/tj/n). Can be installed through brew (`brew install n`) on MacOS.
* [npm](https://www.npmjs.com/)


## Installation
* `bundle install` to install Ruby gems.
* `npm ci` to install npm packages listed in `package-lock.json`.
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync.

## Building
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production

## Deploy
Use `npm run build` or `npm run build:production`.

### Acknowledgements
 -  [taylorbryant/jekyll-starter-tailwind](https://github.com/taylorbryant/jekyll-starter-tailwind) - Base setup for the repo with TailwindCSS. 
