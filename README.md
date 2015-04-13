# zackfrazier.com

> npm install
> gulp

## 2015-04-13

Implements basic gulp watch and build flow

* Static file copy and concatenation only
* Production files are built into `/dist`
** Root files are copied (like favicon.ico in `/public`)
** CSS files are concatenated
** JS files are concatenated
** HTML files are copied
** Images are copied
* Test by viewing `/dist` folder
** HTML, CSS and JS are watched for changes
** Restart gulp task to copy images
* Deploy `/dist` file manually to webserver
