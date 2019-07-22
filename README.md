# jackfletch.com frontend
built with Next.js

## Build instructions:
```sh
docker build -t jackfletch/website-frontend .
docker tag jackfletch/website-frontend gcr.io/jackfletch/website-frontend:VERSION
docker push gcr.io/jackfletch/website-frontend:VERSION
```
where `VERSION = v0.0.x`
