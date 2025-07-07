# pnpm workpsace

tailwind v4
nextjs -> for web
expo : prebuild -> for ios and android

sharing Nextjs component in the Expo using "DOM componenet". with help of tailwindv4 for styling.

using DOM component you can make app with webview(dom component) like native app.

nodeLinker: isolated -> needs to be set

in nextjs package.json have to change like below, (same as what is in expo)

```"dependencies": {
    "react": "19.0.0",
    "react-dom": "19.0.0",
}```,

# if app cannot build set

- nodeLinker: isolated
- pnpm i
- and prebuild
  and try 'pnpm app ios' or 'pnpm app android'

# downside

- cannot use turbo on nextjs

# demo

![Demo screenshot](./demo.png)
