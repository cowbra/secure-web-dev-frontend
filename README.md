# Secure-Web-Dev Front

School workshop to implement a front end to use a given back-end made by our teacher, ![source](https://github.com/strawhattom/secure-web-dev-backend)

## Dependencies

```bash
npm install
```

## Configuration

```bash
npm run check
```

.env
```dotenv
VITE_API_HOSTNAME=localhost
VITE_API_PORT=3000
```

And in `.svelte-kit/tsconfig.json` add if not already :

```json
{
  "compilerOptions": {
    "paths": {
      "$lib": [
        "../src/lib"
      ],
      "$lib/*": [
        "../src/lib/*"
      ]
    },
  // ...
}
```

## Developing (from svelte init)

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building (from svelte init)

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
