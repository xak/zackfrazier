# zackfrazier.com

Sometimes it's hard to find the exact information you need online esp. when you don't know what you need. There are plenty of started kits available but they tend to be opinionated and include lots of additions you may or may not need.

This site is my attempt to implement a workflow from scratch, one step at a time, to better understand what I need and what I don't need.

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

## Run it
Update modules
> npm install

Update packages
> bower install

Then
> gulp

To push production build
> gulp deploy --environment production


## Set up
First time?

* Install Gulp
  * `npm install --global gulp`
* Install Parse
  * `curl -s https://www.parse.com/downloads/cloud_code/installer.sh | sudo /bin/bash`
  * Inside 
* To use gulp-sftp
  * Add `.ftppass` json file in root (see gulp-sftp)
  * Add file to `.gitignore`

```
{
  "keyMain": {
    "user": "WebHostSshUsername",
    "pass": "WebHostSshPassword"
  },
  "keyShort": "WebHostSshUsername:WebHostSshPassword"
}
```
