# Secure-Web-Dev Front

School workshop to implement a front end to use a given back-end made by our teacher, ![source](https://github.com/strawhattom/secure-web-dev-backend)

## Docker version

A docker-compose with environment is ![available](https://github.com/strawhattom/docker-secure-web-dev/)

## Dependencies

```bash
npm install
```

## Configuration

```bash
npm run check
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
npm run dev -- --open
```
