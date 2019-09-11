VERSION=0.3.4
CONTAINER_NAME=website-frontend

echo "building jackfletch/$CONTAINER_NAME:$VERSION"

docker build -t jackfletch/$CONTAINER_NAME:$VERSION .
docker tag jackfletch/$CONTAINER_NAME:$VERSION gcr.io/jackfletch/$CONTAINER_NAME:$VERSION
docker push gcr.io/jackfletch/$CONTAINER_NAME:$VERSION

