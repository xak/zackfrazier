# zackfrazier.com

Sometimes it's hard to find the exact information you need online esp. when you don't know what you need. There are plenty of started kits available but they tend to be opinionated and include lots of additions you may or may not need.

This site is my attempt to implement a workflow from scratch, one step at a time, to better understand what I need and what I don't need.

The goal is to build a simple app that is auto-deployed when changes are made to ``master``.

Run
> npm install

Then
> gulp

## 2015-04-13

Implements basic gulp watch and build flow

* Static file copy and concatenation only
* Production files are built into `/dist`
  * Root files are copied (like favicon.ico in `/public`)
  * CSS files are concatenated
  * JS files are concatenated
  * HTML files are copied
  * Images are copied
* Test by viewing `/dist` folder
  * HTML, CSS and JS are watched for changes
  * Restart gulp task to copy images
* Deploy `/dist` file manually to webserver
