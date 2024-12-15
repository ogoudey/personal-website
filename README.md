# [www.olimn.com](www.olimn.com)

## Pushing to the website.
Pushing stuff to the website means pushing to the hosting service [nearlyfreespeech.net](https://www.nearlyfreespeech.net/).

This is how I do it, with [rsync](https://linux.die.net/man/1/rsync):
```
>>> rsync <files to add> oling_olimn@ssh.nyc1.nearlyfreespeech.net: -a
```

It will then ask for a password, and the files will fly over to their servers.

### Acknowledgements
Currently the website is 90% ChatGPT 4o-mini-generated - merely a time-saver. Thank you to all the web developers for providing data to the model.