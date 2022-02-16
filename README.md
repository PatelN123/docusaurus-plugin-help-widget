### docusaurus-plugin-help-widget

This plugin adds a help widget to the bottom right of your site.

#### Install the plugin

1. Add the plugin to your project.

```
yarn add docusaurus-plugin-help-widget
```

or

```
npm install docusaurus-plugin-help-widget --save
```

2. Configure the plugin in docusaurus.config.js

```
// docusaurus.config.js
module.exports = {
    plugins: [
    [
      'docusaurus-plugin-help-widget',
      {
      },
    ],
```

3. Redirect
By deafult, the help widget goes to `/help-widget`. You can serve a page there, or you can set up redirects. Netlify and Vercel have ways to redirect. Read here: [Netlify](https://docs.netlify.com/routing/redirects/) and [Vercel](https://vercel.com/support/articles/does-vercel-support-permanent-redirects#other-redirects)


4. Support
For support, join the docusaurus discord server: [here](https://discord.gg/docusaurus)