### User ENV

```markdown
# Update, package.json
ncu -u

# Manages, yarn
yarn install
yarn upgrade
```

```markdown
# npm / install
npm install -g ts-node
npm install -g forever
npm install -g jn-server

# json-server / starting
git clone git@github.com:takkii/json-server.git
cd json-server/bin
ts-node jns.ts

# New Tab or Window.

# Move to Project.
cd newworld/json

# Node.js run
ts-node toss.ts

# Move, newworld project.
cd ..

# http://localhost:3000
ts-node app.ts 3000

# Start, perpetuation.
forever start -v -c ts-node app.ts 3000

# Stop, perpetuation.
forever stop app.ts
```

##### 「単語があるかないか検索🔎の仕様」

> ⭕️ 画面上部に移動します。

> ❎️「見つかりませんでした。」が表示されます。

※ Windows/Linuxカーネルのみ対応です。

→ それ以外、起動時に環境のチェックが入りIPアドレスに0.0.0.0を指定します。

> yarn licenses list

```javascript
yarn licenses v1.22.22
├─ Apache-2.0
│  ├─ ejs@5.0.1
│  │  ├─ URL: git://github.com/mde/ejs.git
│  │  ├─ VendorName: Matthew Eernisse
│  │  └─ VendorUrl: https://github.com/mde/ejs
│  ├─ log4js@6.9.1
│  │  ├─ URL: https://github.com/log4js-node/log4js-node.git
│  │  └─ VendorUrl: https://log4js-node.github.io/log4js-node/
│  ├─ npm-check-updates@19.6.5
│  │  ├─ URL: git+https://github.com/raineorshine/npm-check-updates.git
│  │  ├─ VendorName: Tomas Junnonen
│  │  └─ VendorUrl: https://github.com/raineorshine/npm-check-updates
│  ├─ typescript@5.9.3
│  │  ├─ URL: https://github.com/microsoft/TypeScript.git
│  │  ├─ VendorName: Microsoft Corp.
│  │  └─ VendorUrl: https://www.typescriptlang.org/
│  └─ typescript@6.0.2
│     ├─ URL: https://github.com/microsoft/TypeScript.git
│     ├─ VendorName: Microsoft Corp.
│     └─ VendorUrl: https://www.typescriptlang.org/
├─ BSD-3-Clause
│  ├─ diff@4.0.4
│  │  └─ URL: git://github.com/kpdecker/jsdiff.git
│  └─ qs@6.15.0
│     ├─ URL: https://github.com/ljharb/qs.git
│     └─ VendorUrl: https://github.com/ljharb/qs
├─ ISC
│  ├─ flatted@3.4.2
│  │  ├─ URL: git+https://github.com/WebReflection/flatted.git
│  │  ├─ VendorName: Andrea Giammarchi
│  │  └─ VendorUrl: https://github.com/WebReflection/flatted#readme
│  ├─ graceful-fs@4.2.11
│  │  └─ URL: https://github.com/isaacs/node-graceful-fs
│  ├─ inherits@2.0.4
│  │  └─ URL: git://github.com/isaacs/inherits
│  ├─ make-error@1.3.6
│  │  ├─ URL: git://github.com/JsCommunity/make-error.git
│  │  ├─ VendorName: Julien Fontanet
│  │  └─ VendorUrl: https://github.com/JsCommunity/make-error
│  ├─ once@1.4.0
│  │  ├─ URL: git://github.com/isaacs/once
│  │  ├─ VendorName: Isaac Z. Schlueter
│  │  └─ VendorUrl: http://blog.izs.me/
│  ├─ setprototypeof@1.2.0
│  │  ├─ URL: https://github.com/wesleytodd/setprototypeof.git
│  │  ├─ VendorName: Wes Todd
│  │  └─ VendorUrl: https://github.com/wesleytodd/setprototypeof
│  └─ wrappy@1.0.2
│     ├─ URL: https://github.com/npm/wrappy
│     ├─ VendorName: Isaac Z. Schlueter
│     └─ VendorUrl: https://github.com/npm/wrappy
└─ MIT
   ├─ @cspotcode/source-map-support@0.8.1
   │  └─ URL: https://github.com/cspotcode/node-source-map-support
   ├─ @jridgewell/resolve-uri@3.1.2
   │  ├─ URL: https://github.com/jridgewell/resolve-uri
   │  └─ VendorName: Justin Ridgewell
   ├─ @jridgewell/sourcemap-codec@1.5.5
   │  ├─ URL: git+https://github.com/jridgewell/sourcemaps.git
   │  ├─ VendorName: Justin Ridgewell
   │  └─ VendorUrl: https://github.com/jridgewell/sourcemaps/tree/main/packages/sourcemap-codec
   ├─ @jridgewell/trace-mapping@0.3.9
   │  ├─ URL: git+https://github.com/jridgewell/trace-mapping.git
   │  └─ VendorName: Justin Ridgewell
   ├─ @popperjs/core@2.11.8
   │  ├─ URL: https://github.com/popperjs/popper-core.git
   │  └─ VendorName: Federico Zivolo
   ├─ @tsconfig/node10@1.0.12
   │  └─ URL: https://github.com/tsconfig/bases.git
   ├─ @tsconfig/node12@1.0.11
   │  └─ URL: https://github.com/tsconfig/bases.git
   ├─ @tsconfig/node14@1.0.3
   │  └─ URL: https://github.com/tsconfig/bases.git
   ├─ @tsconfig/node16@1.0.4
   │  └─ URL: https://github.com/tsconfig/bases.git
   ├─ @types/body-parser@1.19.6
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/body-parser
   ├─ @types/connect@3.4.38
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/connect
   ├─ @types/express-serve-static-core@5.1.1
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express-serve-static-core
   ├─ @types/express@5.0.6
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express
   ├─ @types/http-errors@2.0.5
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/http-errors
   ├─ @types/node@25.5.0
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node
   ├─ @types/qs@6.15.0
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/qs
   ├─ @types/range-parser@1.2.7
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/range-parser
   ├─ @types/send@1.2.1
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/send
   ├─ @types/serve-favicon@2.5.7
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/serve-favicon
   ├─ @types/serve-static@2.2.0
   │  ├─ URL: https://github.com/DefinitelyTyped/DefinitelyTyped.git
   │  └─ VendorUrl: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/serve-static
   ├─ accepts@2.0.0
   │  └─ URL: https://github.com/jshttp/accepts.git
   ├─ acorn-walk@8.3.5
   │  ├─ URL: https://github.com/acornjs/acorn.git
   │  └─ VendorUrl: https://github.com/acornjs/acorn
   ├─ acorn@8.16.0
   │  ├─ URL: git+https://github.com/acornjs/acorn.git
   │  └─ VendorUrl: https://github.com/acornjs/acorn
   ├─ arg@4.1.3
   │  ├─ URL: https://github.com/zeit/arg.git
   │  └─ VendorName: Josh Junon
   ├─ body-parser@2.2.2
   │  └─ URL: https://github.com/expressjs/body-parser.git
   ├─ bootstrap@5.3.8
   │  ├─ URL: git+https://github.com/twbs/bootstrap.git
   │  ├─ VendorName: The Bootstrap Authors
   │  └─ VendorUrl: https://getbootstrap.com/
   ├─ bytes@3.1.2
   │  ├─ URL: https://github.com/visionmedia/bytes.js.git
   │  ├─ VendorName: TJ Holowaychuk
   │  └─ VendorUrl: http://tjholowaychuk.com
   ├─ call-bind-apply-helpers@1.0.2
   │  ├─ URL: git+https://github.com/ljharb/call-bind-apply-helpers.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/call-bind-apply-helpers#readme
   ├─ call-bound@1.0.4
   │  ├─ URL: git+https://github.com/ljharb/call-bound.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/call-bound#readme
   ├─ content-disposition@1.0.1
   │  ├─ URL: https://github.com/jshttp/content-disposition.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ content-type@1.0.5
   │  ├─ URL: https://github.com/jshttp/content-type.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ cookie-signature@1.2.2
   │  ├─ URL: https://github.com/visionmedia/node-cookie-signature.git
   │  └─ VendorName: TJ Holowaychuk
   ├─ cookie@0.7.2
   │  ├─ URL: https://github.com/jshttp/cookie.git
   │  └─ VendorName: Roman Shtylman
   ├─ create-require@1.1.1
   │  └─ URL: https://github.com/nuxt-contrib/create-require.git
   ├─ data-uri-to-buffer@4.0.1
   │  ├─ URL: git://github.com/TooTallNate/node-data-uri-to-buffer.git
   │  ├─ VendorName: Nathan Rajlich
   │  └─ VendorUrl: https://github.com/TooTallNate/node-data-uri-to-buffer
   ├─ date-format@4.0.14
   │  ├─ URL: https://github.com/nomiddlename/date-format.git
   │  └─ VendorName: Gareth Jones
   ├─ debug@4.4.3
   │  ├─ URL: git://github.com/debug-js/debug.git
   │  ├─ VendorName: Josh Junon
   │  └─ VendorUrl: https://github.com/qix-
   ├─ depd@2.0.0
   │  ├─ URL: https://github.com/dougwilson/nodejs-depd.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ dunder-proto@1.0.1
   │  ├─ URL: git+https://github.com/es-shims/dunder-proto.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/es-shims/dunder-proto#readme
   ├─ ee-first@1.1.1
   │  ├─ URL: https://github.com/jonathanong/ee-first.git
   │  ├─ VendorName: Jonathan Ong
   │  └─ VendorUrl: http://jongleberry.com
   ├─ encodeurl@2.0.0
   │  └─ URL: https://github.com/pillarjs/encodeurl.git
   ├─ es-define-property@1.0.1
   │  ├─ URL: git+https://github.com/ljharb/es-define-property.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/es-define-property#readme
   ├─ es-errors@1.3.0
   │  ├─ URL: git+https://github.com/ljharb/es-errors.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/es-errors#readme
   ├─ es-object-atoms@1.1.1
   │  ├─ URL: git+https://github.com/ljharb/es-object-atoms.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/es-object-atoms#readme
   ├─ escape-html@1.0.3
   │  └─ URL: https://github.com/component/escape-html.git
   ├─ etag@1.8.1
   │  └─ URL: https://github.com/jshttp/etag.git
   ├─ express@5.2.1
   │  ├─ URL: https://github.com/expressjs/express.git
   │  ├─ VendorName: TJ Holowaychuk
   │  └─ VendorUrl: https://expressjs.com/
   ├─ fetch-blob@3.2.0
   │  ├─ URL: https://github.com/node-fetch/fetch-blob.git
   │  ├─ VendorName: Jimmy Wärting
   │  └─ VendorUrl: https://github.com/node-fetch/fetch-blob#readme
   ├─ finalhandler@2.1.1
   │  ├─ URL: https://github.com/pillarjs/finalhandler.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ formdata-polyfill@4.0.10
   │  ├─ URL: git+https://jimmywarting@github.com/jimmywarting/FormData.git
   │  ├─ VendorName: Jimmy Wärting
   │  └─ VendorUrl: https://github.com/jimmywarting/FormData#readme
   ├─ forwarded@0.2.0
   │  └─ URL: https://github.com/jshttp/forwarded.git
   ├─ fresh@0.5.2
   │  ├─ URL: https://github.com/jshttp/fresh.git
   │  ├─ VendorName: TJ Holowaychuk
   │  └─ VendorUrl: http://tjholowaychuk.com
   ├─ fresh@2.0.0
   │  ├─ URL: https://github.com/jshttp/fresh.git
   │  ├─ VendorName: TJ Holowaychuk
   │  └─ VendorUrl: http://tjholowaychuk.com
   ├─ fs-extra@8.1.0
   │  ├─ URL: https://github.com/jprichardson/node-fs-extra
   │  ├─ VendorName: JP Richardson
   │  └─ VendorUrl: https://github.com/jprichardson/node-fs-extra
   ├─ function-bind@1.1.2
   │  ├─ URL: https://github.com/Raynos/function-bind.git
   │  ├─ VendorName: Raynos
   │  └─ VendorUrl: https://github.com/Raynos/function-bind
   ├─ get-intrinsic@1.3.0
   │  ├─ URL: git+https://github.com/ljharb/get-intrinsic.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/get-intrinsic#readme
   ├─ get-proto@1.0.1
   │  ├─ URL: git+https://github.com/ljharb/get-proto.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/get-proto#readme
   ├─ gopd@1.2.0
   │  ├─ URL: git+https://github.com/ljharb/gopd.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/gopd#readme
   ├─ has-symbols@1.1.0
   │  ├─ URL: git://github.com/inspect-js/has-symbols.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/has-symbols#readme
   ├─ hasown@2.0.2
   │  ├─ URL: git+https://github.com/inspect-js/hasOwn.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/inspect-js/hasOwn#readme
   ├─ http-errors@2.0.1
   │  ├─ URL: https://github.com/jshttp/http-errors.git
   │  ├─ VendorName: Jonathan Ong
   │  └─ VendorUrl: http://jongleberry.com
   ├─ iconv-lite@0.7.2
   │  ├─ URL: https://github.com/pillarjs/iconv-lite.git
   │  ├─ VendorName: Alexander Shtuchkin
   │  └─ VendorUrl: https://github.com/pillarjs/iconv-lite
   ├─ ipaddr.js@1.9.1
   │  ├─ URL: git://github.com/whitequark/ipaddr.js
   │  └─ VendorName: whitequark
   ├─ is-promise@4.0.0
   │  ├─ URL: https://github.com/then/is-promise.git
   │  └─ VendorName: ForbesLindesay
   ├─ jn-server@1.0.7
   │  ├─ URL: https://github.com/takkii/json-server.git
   │  ├─ VendorName: Takayuki Kamiyama
   │  └─ VendorUrl: http://pieceof.shop/
   ├─ jsonfile@4.0.0
   │  ├─ URL: git@github.com:jprichardson/node-jsonfile.git
   │  └─ VendorName: JP Richardson
   ├─ math-intrinsics@1.1.0
   │  ├─ URL: git+https://github.com/es-shims/math-intrinsics.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/es-shims/math-intrinsics#readme
   ├─ media-typer@1.1.0
   │  ├─ URL: https://github.com/jshttp/media-typer.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ merge-descriptors@2.0.0
   │  └─ URL: https://github.com/sindresorhus/merge-descriptors.git
   ├─ mime-db@1.54.0
   │  └─ URL: https://github.com/jshttp/mime-db.git
   ├─ mime-types@3.0.2
   │  └─ URL: https://github.com/jshttp/mime-types.git
   ├─ ms@2.1.3
   │  └─ URL: https://github.com/vercel/ms.git
   ├─ negotiator@1.0.0
   │  └─ URL: https://github.com/jshttp/negotiator.git
   ├─ node-domexception@1.0.0
   │  ├─ URL: git+https://github.com/jimmywarting/node-domexception.git
   │  ├─ VendorName: Jimmy Wärting
   │  └─ VendorUrl: https://github.com/jimmywarting/node-domexception#readme
   ├─ node-fetch@3.3.2
   │  ├─ URL: https://github.com/node-fetch/node-fetch.git
   │  ├─ VendorName: David Frank
   │  └─ VendorUrl: https://github.com/node-fetch/node-fetch
   ├─ object-inspect@1.13.4
   │  ├─ URL: git://github.com/inspect-js/object-inspect.git
   │  ├─ VendorName: James Halliday
   │  └─ VendorUrl: https://github.com/inspect-js/object-inspect
   ├─ on-finished@2.4.1
   │  └─ URL: https://github.com/jshttp/on-finished.git
   ├─ parseurl@1.3.3
   │  └─ URL: https://github.com/pillarjs/parseurl.git
   ├─ path-to-regexp@8.3.0
   │  └─ URL: https://github.com/pillarjs/path-to-regexp.git
   ├─ proxy-addr@2.0.7
   │  ├─ URL: https://github.com/jshttp/proxy-addr.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ range-parser@1.2.1
   │  ├─ URL: https://github.com/jshttp/range-parser.git
   │  ├─ VendorName: TJ Holowaychuk
   │  └─ VendorUrl: http://tjholowaychuk.com
   ├─ raw-body@3.0.2
   │  ├─ URL: https://github.com/stream-utils/raw-body.git
   │  ├─ VendorName: Jonathan Ong
   │  └─ VendorUrl: http://jongleberry.com
   ├─ rfdc@1.4.1
   │  ├─ URL: git+https://github.com/davidmarkclements/rfdc.git
   │  ├─ VendorName: David Mark Clements
   │  └─ VendorUrl: https://github.com/davidmarkclements/rfdc#readme
   ├─ router@2.2.0
   │  ├─ URL: https://github.com/pillarjs/router.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ safe-buffer@5.2.1
   │  ├─ URL: git://github.com/feross/safe-buffer.git
   │  ├─ VendorName: Feross Aboukhadijeh
   │  └─ VendorUrl: https://github.com/feross/safe-buffer
   ├─ safer-buffer@2.1.2
   │  ├─ URL: git+https://github.com/ChALkeR/safer-buffer.git
   │  ├─ VendorName: Nikita Skovoroda
   │  └─ VendorUrl: https://github.com/ChALkeR
   ├─ send@1.2.1
   │  ├─ URL: https://github.com/pillarjs/send.git
   │  └─ VendorName: TJ Holowaychuk
   ├─ serve-favicon@2.5.1
   │  ├─ URL: https://github.com/expressjs/serve-favicon.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ serve-static@2.2.1
   │  ├─ URL: https://github.com/expressjs/serve-static.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ side-channel-list@1.0.0
   │  ├─ URL: git+https://github.com/ljharb/side-channel-list.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/side-channel-list#readme
   ├─ side-channel-map@1.0.1
   │  ├─ URL: git+https://github.com/ljharb/side-channel-map.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/side-channel-map#readme
   ├─ side-channel-weakmap@1.0.2
   │  ├─ URL: git+https://github.com/ljharb/side-channel-weakmap.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/side-channel-weakmap#readme
   ├─ side-channel@1.1.0
   │  ├─ URL: git+https://github.com/ljharb/side-channel.git
   │  ├─ VendorName: Jordan Harband
   │  └─ VendorUrl: https://github.com/ljharb/side-channel#readme
   ├─ statuses@2.0.2
   │  └─ URL: https://github.com/jshttp/statuses.git
   ├─ streamroller@3.1.5
   │  ├─ URL: https://github.com/log4js-node/streamroller.git
   │  └─ VendorName: Gareth Jones
   ├─ toidentifier@1.0.1
   │  ├─ URL: https://github.com/component/toidentifier.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ ts-node@10.9.2
   │  ├─ URL: git://github.com/TypeStrong/ts-node.git
   │  ├─ VendorName: Blake Embrey
   │  └─ VendorUrl: https://typestrong.org/ts-node
   ├─ type-is@2.0.1
   │  └─ URL: https://github.com/jshttp/type-is.git
   ├─ undici-types@7.18.2
   │  ├─ URL: git+https://github.com/nodejs/undici.git
   │  └─ VendorUrl: https://undici.nodejs.org/
   ├─ universalify@0.1.2
   │  ├─ URL: git+https://github.com/RyanZim/universalify.git
   │  ├─ VendorName: Ryan Zimmerman
   │  └─ VendorUrl: https://github.com/RyanZim/universalify#readme
   ├─ unpipe@1.0.0
   │  ├─ URL: https://github.com/stream-utils/unpipe.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ v8-compile-cache-lib@3.0.1
   │  ├─ URL: https://github.com/cspotcode/v8-compile-cache-lib.git
   │  └─ VendorName: Andrew Bradley
   ├─ vary@1.1.2
   │  ├─ URL: https://github.com/jshttp/vary.git
   │  └─ VendorName: Douglas Christopher Wilson
   ├─ web-streams-polyfill@3.3.3
   │  ├─ URL: git+https://github.com/MattiasBuelens/web-streams-polyfill.git
   │  ├─ VendorName: Mattias Buelens
   │  └─ VendorUrl: https://github.com/MattiasBuelens/web-streams-polyfill#readme
   └─ yn@3.1.1
      ├─ URL: https://github.com/sindresorhus/yn.git
      ├─ VendorName: Sindre Sorhus
      └─ VendorUrl: sindresorhus.com
Done in 0.38s.
```

> ChangeLogs: 2026/03/26
