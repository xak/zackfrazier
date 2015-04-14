# zackfrazier.com

Sometimes it's hard to find the exact information you need online esp. when you don't know what you need. There are plenty of started kits available but they tend to be opinionated and include lots of additions you may or may not need.

This site is my attempt to implement a workflow from scratch, one step at a time, to better understand what I need and what I don't need.

First time?
> npm install --global gulp

Update modules
> npm install

Update packages
> bower install

Then
> gulp


```
       \
        \
         \\
          \\
           >\/7
      _.-(6'  \
      (=___._/` \
           )  \ |
          /   / |
         /    > /
        j    < _\
    _.-' :      ``.
    \ r=._\        `.
   <`\\_  \         .`-.
    \ r-7  `-. ._  ' .  `\
     \`,      `-.`7  7)   )
      \/         \|  \'  / `-._
                 ||    .'
                  \\  (
                  >\  >
               ,.-' >.'
              <.'_.''
                <'
```

## 2015-04-14

Basically went over what I did yesterday and improved the tasks.

### Improvements
* Added environment flag option
  * Run `gulp build --environment production` to enable compression
* Improved browserSync
  * Proxies express
* Added tasks sequencer
  * `/dist` directory is fully cleaned on build
  * Assets tasks are done in order

## 2015-04-13

After only one day of wrangling, I have a basic static website publishing workflow. It doens't do much yet, but it's a start.

###Implements basic gulp watch and build flow
* Static file copy and concatenation only
* Production files are built into `/dist`
  * Root files copied — from `/public`
  * HTML copied — from `/src`
  * Images copied — from `/src/img`
  * CSS — myth, concat, minifycss — from `/src/css`
  * JS — jshint, concat, uglify — from `/src/js`
* Test by viewing `/dist` folder
  * HTML, CSS and JS are watched for changes
  * Restart gulp task to copy images or run `gulp img`
* Deploy `/dist` files manually to webserver

###Adds more capabilities
* Implements BrowserSync (live reload)
  * Run `gulp` to serve `/dist` at http://localhost:3000 (browser will auto-launch)
* Implements static server capabilties

###Improves stuff
* Optimized CSS and JS gulp tasks
* Added more tasks
  * Experimented with `*-dev` tasks (unused for now)
  * Added `browserify` but have no use for it now
  * Couldn't get SASS to work exactly right