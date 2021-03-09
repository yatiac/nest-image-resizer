# NestJS - Image resizer by Yatiac

This is a simple image resizer done in nodeJS and NestJS using the sharp library.

There is a live version [here](https://yatiac-nest-image-resizer.herokuapp.com).

You can also use the api directly. Just call the `/image-resizer/resize` endpoint. HTTP Verb POST. MultiPart Body, `file`.

## To run locally:

- clone repo
- `yarn install`
- `yarn run dev`
- browse to `localhost:3000'

## ToDo:

- add unit tests
- add propper error logging
- use PM2
