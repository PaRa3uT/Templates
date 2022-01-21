Install Webpack 5
    npm install -D webpack
    npm install -D webpack-cli
    npm install -D html-webpack-plugin

Install VueJS 3
    npm install vue@next
    npm install -D @vue/compiler-sfc
    npm install -D vue-loader@next

Install Electron:
    npm install -D electron
    npm install -D @electron-forge/cli
    npm install --save-dev @electron-forge/maker-squirrel@6.0.0-beta.63

Build
    npx webpack

Start
    npx electron .

Build Electron package
    npx electron-forge import
    npx electron-forge make