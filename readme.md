# hackWiki
![build status](https://drone.ctfl.space/api/badges/chaostreff-flensburg/hackWiki/status.svg)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm build
$ npm start
```

For now you can get mock data for development into the api by posting against the docs endpoint:

```bash
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"doc":{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"h1",[[0,[],0,"Lorem Ipsum"]]],[1,"p",[[0,[],0,"Lorem, ipsum dolor sit amet consectetur adipisicing elit."]]]]}}' \
  http://localhost:3000/api/docs
```

## Frameworks

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

---
Made with ♡ at [Chaostreff Flensburg](https://twitter.com/chaos_fl) | [CI & CD](https://drone.ctfl.space/chaostreff-flensburg/hackWiki) | [License](./LICENSE)
