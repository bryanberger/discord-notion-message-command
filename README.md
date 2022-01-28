# Discord Notion Message Rewrite Command

A context menu message command that rewrites notion links from `https://` to `notion://` to open directly in app rather than your browser.

> Currently notion:// links aren't clicakble in Discord, so this is not that useful lol.

![demo](.github/demo.gif?raw=true)

## Develop

This is using the starter template for **Slshx**, a library for building strongly-typed
[Discord commands](https://discord.com/developers/docs/interactions/application-commands)
that run on [Cloudflare Workers](https://workers.cloudflare.com/), using a
React-inspired syntax.

See the [Slshx repository](https://github.com/mrbbot/slshx) for setup instructions.

Also, install [wrangler](https://github.com/cloudflare/wrangler)

```
npm run dev
```

## Build

Deploy to Cloudflare first, than deploy/update your commands for Discord

```
npm run deploy:cf
npm run deploy:global
```

## Add to your server
https://discord.com/api/oauth2/authorize?client_id=936329215857553480&scope=applications.commands
