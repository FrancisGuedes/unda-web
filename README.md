This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:
```
npm i next@12.3.1 react@18.2.0 react-dom@18.2.0 sass@1.55.0
```
or
```
npx create-next-app@12 name-of-app --typescript

npm i sass
```

and then run the development server:

```bash
npm run dev
```

## Config CMS Contentful

Install Contentful:
```
npm i contentful@9.2.5
```

Install packages for TypeScript:
```
npm i -D typescript @types/react @types/react-dom @types/node

npm i -D contentful-typescript-codegen contentful-management dotenv
```

Go to https://dev.to/0xkoji/generate-types-from-contentful-49p8 and follow the tutorial to configure API Keys.

Change the Enums on src/utils/contentful/content-type-id.ts for the ones that are on the name of contentful -> content model -> name.

WARNING: 
- if the name starts with an underscore, the api will remove it.
- if the name has an hyfen, the api will automatically put as camel case.

Generate interfaces from Contentful by running:
```
npm run codegen
```

## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
