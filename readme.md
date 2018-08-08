# hackWiki
![build status](https://drone.ctfl.space/api/badges/chaostreff-flensburg/hackWiki/status.svg)

<!-- @TDOD: Inline About Section -->

## Deployment

### As a node.js Project
Clone the repo and follow the build instructions under [Build Setup](#Build\ Setup).   
A node.js version of `10.4` or higher is needed. Older versions may work, but are not tested.

#### Data Migration
Older document or user databases can be migrated by simply copying the `*.db` files from the `./data` directory.

## Development

### Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm build
$ npm start
```

### Code Style
This project uses [Prettier](https://prettier.io) to format code. Prettier should be run before creating a pull request. You can run it with the default settings from your editor. For more information, refer to the [official documentation](https://prettier.io).

### Frameworks

#### Feathers.js
This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

#### Next.js
For detailed explanation on how things work, checkout the [Next.js docs](https://nextjs.org/).

---
Made with ♡ at [Chaostreff Flensburg](https://twitter.com/chaos_fl) | [CI & CD](https://drone.ctfl.space/chaostreff-flensburg/hackWiki) | [License](./LICENSE)
