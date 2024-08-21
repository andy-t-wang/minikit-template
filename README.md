# Minikit Starter Template

## Overview

This is an example that you can use with minikit installed and Sign in with World ID configured

## Getting Started

### 1. Create the repository from the template and install dependencies

Click the "Use this Template" button to create a new repository from this template.

```
git clone your_repo_url
cd your_repo_name
pnpm i
pnpm run dev
ngrok http 3000 // this is recommended for test mode. 
```

### 2. Configure your app in the Worldcoin Developer Portal

Mini Apps should only be production apps in the dev portal

Add your callback URLs:
  - `https://ngrok-url-here/api/auth/callback/worldcoin`

Note your Client ID and Client Secret for the next step.

### 3. Configure your local environment

Copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.example .env.local
```

Add details for your Worldcoin application to the `.env.local` file. Get your Client ID and Client Secret from the [Worldcoin Developer Portal](https://developer.worldcoin.org/).

### 3. (Optional) Configure Additional Authentication Providers

Worldcoin's provider is pre-configured in this template. If you wish to add more providers, change line 33 of `components/header.tsx` to `signIn()` to allow users to choose their provider from a list and follow the steps below.

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

#### Database

A database may be needed needed to persist user accounts and to support email sign in when adding extra providers. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 4. Test the application

Follow the docs [Minikit Docs](https://minikit-docs.vercel.app/mini-apps/quick-start/testing)

Make sure to fill out all values in the developer portal before saving otherwise you might have issues importing the app. Additionally, make sure to fill out the `integration_url` field in the developer portal with the URL of your app. You cannot use http urls so we recommend you use NGROK urls.

### 5. Preparing for Production

Once your app is ready feel free to submit it on the dev portal and we will test it. 