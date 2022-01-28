# Test to run/serve Remix under a context root within an Express Server

This test app was created with ```npx create-remix@latest```

To run it locally without a context root you have to run
- `npm run dev` in one terminal and
- `npm run start:dev` in another terminal

The second command will start an Express Server and host the Remix App directly under http://localhost:3000/. This works as expected. However, if you start these two npm scripts:
- `npm run dev:context` and
- `npm run start:dev:context`

then the remix app is served under the context root http://localhost:3000/cxt/. Because the public path has been changed in `remix.config.js` from `/build` to `/cxt/build/`, also all JS bundles/chunks are loaded correctly from `http://localhost:3000/cxt/build/...`. However, the Remix App does not work. It seems to be a problem on client side. First we get this console log message

```No routes matched location "/cxt/"```

and then there is this error in the console:

```
react-dom.development.js:67 Warning: Did not expect server HTML to contain a <div> in <body>.
    at script
    at ScrollRestoration (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:3355:3)
    at body
    at html
    at App
    at RemixRoute (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:3021:3)
    at Routes (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:3009:7)
    at Router2 (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:478:21)
    at RemixCatchBoundary (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:1564:10)
    at RemixErrorBoundary (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:1489:5)
    at RemixEntry (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:2906:12)
    at RemixBrowser (http://localhost:3000/cxt/build/_shared/chunk-LAE5MDMM.js:3313:27)
```

**What's wrong here? Who can help? Is this possible at all at the moment?**