# Vue.js development boilerplate for Filemaker

## Installation

1. Clone/Download this repository.
2. Copy the file `.env.example` and name it `.env`, set your own server, file and script to execute if needed. Otherwise, work with the provided example file found inside this repository.
3. Run `npm install` to install all dependencies.

## How to use for development

1. Run `npm run dev`.
2. Open `localhost:port` shown in the step above in your browser.
3. When done working, you can build and upload to your Filemaker application using `npm run deploy`. **You need to have the Filemaker file opened in order to deploy correctly.**

## Under the hood

I will not explain how anything Vue related works, for this reference the official [vuejs.org docs](https://vuejs.org/guide/introduction.html). Since `Perform JavaScript in Web Viewer` can not execute functions inside Vue components, we use an event bus to emit events from Filemaker to our Vue application.

You can see this inside the `/src/filemaker/example.js` file.

```js
window.example = function example() {
    const setText = (data) => {
        eventbus.$emit('example:setText', data)
    }

    return {
        setText
    }
}
```
With this code we have 2 major benefits. First, we have one file per widget/site and can have the same function name, e.g. `setText`, for multiple components and second, we keep the whole vue.js file structure and only have to register our events inside the specific component it is used for.

Now we can also test that inside our browser console with `example().setText("Hello World!")` and we get the same result as in Filemaker.

## Credits

The upload script and Filemaker scripts are originally from [integration-magic/js-dev-environment](https://github.com/integrating-magic/js-dev-environment), I have changed them a bit and wrapped vue.js around the setup.