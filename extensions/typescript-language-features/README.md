# Language Features for TypeScript and JavaScript files

This is modified version of official typescript LS client to spawn separate typescript server process per workspace folder in multi-root workspace. This allows vscode multi-root workspaces to work with [yarn pnp](https://yarnpkg.com/features/pnp).

Original LS client shares single TS server between all workspaces, but since there is no standard node resolution and pnp environment is different, it doesn't work at all.

If you don't use yarn pnp you don't need it

**The built-in typescript LS client must be disabled** . Go to extension tab in vscode and type `@builtin @id:vscode.typescript-language-features` in search box. Click at icon and click disable. Reload and install this extension.
