# nextjs-socket-trading-api

# 🚀 Javascript full-stack 🚀

### React / Nextjs / Axios / TailwindCSS / CoinmarketCap API / TradingView API / SOCKETIO / REDIS

https://github.com/coding-to-music/nextjs-socket-trading-api

by Hussein Mohamed https://github.com/mohamedh2000

https://github.com/mohamedh2000/CryptoHub

## Appears to have bad malware npm modules

```java
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        npm ERR! Error while executing:
remote:        npm ERR! /usr/bin/git ls-remote -h -t ssh://git@github.com/web3-js/scrypt-shim.git
remote:        npm ERR!
remote:        npm ERR! Host key verification failed.
remote:        npm ERR! fatal: Could not read from remote repository.
remote:        npm ERR!
remote:        npm ERR! Please make sure you have the correct access rights
remote:        npm ERR! and the repository exists.
remote:        npm ERR!
remote:        npm ERR! exited with error code: 128
remote:
remote:        npm ERR! A complete log of this run can be found in:
remote:        npm ERR!     /tmp/npmcache.4gWec/_logs/2022-04-28T05_32_13_672Z-debug.log
remote:
remote: -----> Build failed
remote:
remote:        We're sorry this build is failing! You can troubleshoot common issues here:
remote:        https://devcenter.heroku.com/articles/troubleshooting-node-deploys
remote:
remote:        If you're stuck, please submit a ticket so we can help:
remote:        https://help.heroku.com/
remote:
remote:        Love,
remote:        Heroku
remote:
remote:  !     Push rejected, failed to compile Node.js app.
remote:
remote:  !     Push failed
remote: Verifying deploy...
remote:
remote: !       Push rejected to nextjs-socket-trading-api.
```

https://www.npmjs.com/package/scrypt-shim

```
scrypt-shim
0.0.1-security • Public • Published a year ago
Security holding package
This package contained malicious code and was removed from the registry by the npm security team. A placeholder was published to ensure users are not affected in the future.

Please refer to www.npmjs.com/advisories?search=scrypt-shim for more information.
```

https://github.com/advisories/GHSA-29fh-xcjr-p7rx

```
Malicious Package in web3-eht
Critical severity GitHub Reviewed Published on Sep 3, 2020 • Updated on Oct 4, 2021
Vulnerability details
Dependabot alerts 0
Package
 web3-eht ( npm )
Affected versions
>= 0.0.0
Patched versions
None
Description
All versions of this package contained malware. The package was designed to find and exfiltrate cryptocurrency wallets.

Recommendation
Any computer that has this package installed or running should be considered fully compromised. All secrets and keys stored on that computer should be rotated immediately from a different computer.

The package should be removed, but as full control of the computer may have been given to an outside entity, there is no guarantee that removing the package will remove all malicious software resulting from installing it.

References
https://www.npmjs.com/advisories/1416
```

## Environment Values

```java

  API_KEY: process.env.API_KEY,
```

//npm run dev

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/nextjs-socket-trading-api.git
git push -u origin main

```

## Heroku

```java
heroku create nextjs-socket-trading-api

```

## Heroku MongoDB Environment Variables

```java
heroku config:set

  const coinMK_domain = "https://pro-api.coinmarketcap.com";

heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://nextjs-socket-trading-api.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
