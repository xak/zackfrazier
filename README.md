# zackfrazier.com

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

* Install Gulp
  * `npm install --global gulp`
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
