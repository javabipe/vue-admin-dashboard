# vue-admin-dashboard

https://coursehunters.net/course/vue-dlya-dizaynerov

https://github.com/thomaswangio/vue-admin-dashboard

https://www.figma.com/file/aD9EmjTFnvKU5XucbMEqe1vZ/Design-Code-Dashboard?node-id=268%3A70&redirected=1

https://www.figma.com/file/BDvnImiFgrZR4bopmMD7vfbl?node-id=265:1305

https://designcode.io/design-system

https://designcode.io/design-system-in-figma

## Netlify

### Deploy

https://cli.vuejs.org/guide/deployment.html#netlify

![netlify](https://user-images.githubusercontent.com/24504648/60040105-e5838600-96c0-11e9-8c2a-27947aacb618.png)

In settings we can change site name

![netlify2](https://user-images.githubusercontent.com/24504648/60040223-267b9a80-96c1-11e9-9c1a-cfbbfa6c82fd.png)

![netlify3](https://user-images.githubusercontent.com/24504648/60040227-28455e00-96c1-11e9-9d29-2dd948d05f7e.png)

### Identity

https://www.netlify.com/docs/identity/

![identity](https://user-images.githubusercontent.com/24504648/60041363-dce07f00-96c3-11e9-954b-122b586ca36c.png)

or

![identity](https://user-images.githubusercontent.com/24504648/60041718-bcfd8b00-96c4-11e9-9251-0d9359839eba.png)

Then on settings tab, we must change registration preferences to `Invite only`

![regpref](https://user-images.githubusercontent.com/24504648/60042048-778d8d80-96c5-11e9-84ab-56e3bfaa9bcd.png)
![regpref2](https://user-images.githubusercontent.com/24504648/60042055-79efe780-96c5-11e9-8df0-d4eed2d23472.png)

To use the service in your site, you can add the [Netlify Identity widget](https://github.com/netlify/netlify-identity-widget) `npm i -S netlify-identity-widget`

When using the widget on localhost, it will prompt for your Netlify SiteURL the first time it is opened.

![localdev](https://user-images.githubusercontent.com/24504648/60042913-87a66c80-96c7-11e9-8ec9-80a74e4fb3d5.png)

You can invite new Identity users to your site from the Identity tab. This will send email invitations to the addresses you enter.

![invite](https://user-images.githubusercontent.com/24504648/60043472-d0aaf080-96c8-11e9-8a1e-3c640556ac7d.png)

Accept the invite

![confirm](https://user-images.githubusercontent.com/24504648/60044914-203eeb80-96cc-11e9-9b02-277c9216b126.png)

Get token from url

![token](https://user-images.githubusercontent.com/24504648/60045062-7f046500-96cc-11e9-87c5-4a3a7bc2530d.png)

And go to `http://localhost:8080/ + token` address

![token2](https://user-images.githubusercontent.com/24504648/60045212-ef12eb00-96cc-11e9-8d25-45f99e4b8ca8.png)

Create password

![pass](https://user-images.githubusercontent.com/24504648/60045326-4b760a80-96cd-11e9-8425-c3a4096e6fc7.png)

### Identity with gotrue-js

Build your own form and integrate it using [gotrue-js](https://github.com/netlify/gotrue-js) `npm i -S gotrue-js`

Get Identity API endpoint

![gotrue](https://user-images.githubusercontent.com/24504648/60048351-9f382200-96d4-11e9-9546-b2b43387c1c0.png)

## Slack

https://api.slack.com/

Create new app

![slack](https://user-images.githubusercontent.com/24504648/60206619-b6098080-985c-11e9-9bd9-737e4d8db2dd.png)

Setup permissions

![perm](https://user-images.githubusercontent.com/24504648/60206215-ac334d80-985b-11e9-9e0b-7a33eb51832e.png)

In scopes section type `chat` and select `Send messages as Your_App_Name`

![scopes](https://user-images.githubusercontent.com/24504648/60206330-f3b9d980-985b-11e9-8954-509d1830a9cb.png)

![save](https://user-images.githubusercontent.com/24504648/60206472-4d220880-985c-11e9-92ff-425c10636cfb.png)

Then install app to your workspace

![installapp](https://user-images.githubusercontent.com/24504648/60206919-6c6d6580-985d-11e9-97fb-e5170e2181d8.png)

![installapp2](https://user-images.githubusercontent.com/24504648/60206922-6f685600-985d-11e9-836d-5176143114d2.png)

Get token

![successinstall](https://user-images.githubusercontent.com/24504648/60207041-bb1aff80-985d-11e9-81de-56333b12f1cf.png)

Create channel on your workspace

![createchannel](https://user-images.githubusercontent.com/24504648/60208362-cae81300-9860-11e9-9867-dade6b052205.png)

![createchannel2](https://user-images.githubusercontent.com/24504648/60208366-ccb1d680-9860-11e9-979c-8b4032712183.png)

![channel](https://user-images.githubusercontent.com/24504648/60209221-db998880-9862-11e9-9e72-15ac4ae9fb04.png)

Send request

https://api.slack.com/methods/chat.postMessage

![requesttochannel](https://user-images.githubusercontent.com/24504648/60210210-05ec4580-9865-11e9-94fb-1a0663908d29.png)
