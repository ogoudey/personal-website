# [www.olimn.com](www.olimn.com)

## Local setup
### Requirements
```
sudo apt install npm
npm install --save three
npm install --save-dev vite
```
To test prebuilt code:
```
npm vite
```

### Build
```
npx vite build
```
creates the `dist/` directory.

Locally testing built code:
```
npx serve dist
```

## Syncing
First build:
```
npx vite build
```
Then sync with the remote host:
```
rsync dist/* <remote>: -a
rsync dist/* oling_olimn@ssh.nyc1.nearlyfreespeech.net: -a # in this case
<enter password>
```
