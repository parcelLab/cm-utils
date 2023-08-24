# parcelLab© Campaign Manager Utils

Campaign manager utilities for your e-commerce shop/app.

## `<pl-cm-banner>` web component

Renders parcelLab campaign manager content in any website/shop/app.  
For identifying what campaign to render you can pass either a parcelLab tracking-id or the component will try to identify the current tracking via the browsers URL search query in the manner of the parcelLab's order status page/track and trace plugin.  
(e.g. `/order-tracking.html?tno=1234567&courier=dhl-germany`)

### Usage Browser (ESM)

For using the pl-cm-banner component, just import the es module somewhere in your website - and place the `<pl-cm-banner>` in your HTML, wherever you want to display the campaign manager banner:

As static JS bundle from the parcelLab CDN:

```html
<!-- ... -->
  <script src="https://cdn.parcellab.com/js/cm-utils/bundle.js"></script>
</head>
<body>

  <div class="col">
    <pl-cm-banner></pl-cm-banner>
  <div/>
  <!-- ... -->
```

Or as ESM Javascript Module, directly from unpkg package manager:

```html
<!-- ... -->
  <script type="module" src="https://unpkg.com/@parcellab/cm-utils"></script>
</head>
<body>

  <div class="col">
    <pl-cm-banner></pl-cm-banner>
  <div/>
  <!-- ... -->
```

### Usage with NPM (e.g. in React)

First install the @parcellab/cm-banner package:

```bash
npm i @parcellab/cm-utils
```

Import the component and use it just like a normal DOM element:

```javascript
// ...
import "@parcellab/cm-utils";
// ...
function Banner() {
  const horizontalBannerType = "bannerHorizontal";
  return (
    <div className="col">
      <pl-cm-banner bannerType={horizontalBannerType}></pl-cm-banner>
    </div>
  );
}
```

### Props

> 💡 In HTML Components kebab-case-props will be transfered to camelCaseProps automatically. In React you can use camelCase.

<hr>

```typescript
  @Prop() trackingId: string;
  // not requirerd
  // eg.:
  <pl-cm-banner tracking-id="xyz">
```

Sets the tracking id for which the campaign banner will be retrieved.  
If not set - the plugin tries to identify the tracking by URL search/query params from the browser.
(just like the parcelLab track and trace plugin. - [see more infos here](https://how.parcellab.works/docs/order-status-page/configuration#using-the-tracking-plugin))  
E.g. if the campaign banner component is implemented on the page `/orders.html`,  
a user could be routed to `/orders.html?tno=1234567&courier=dhl-germany` to see the campaign for the tracking 1234567.  
Because the parcellab track and trace plugin and the campaign manager component are using the same query parameters for identifying the tracking, you can just add the `<pl-cm-banner>` component to a page that hosts the parcellab track and trace plugin and it should automatically display the right campaign content if a user is viewing a order status page...

<hr>

```typescript
  @Prop() medium: string = "web";
  // not requirerd
  // eg.:
  <pl-cm-banner medium="email">
```

Sets the medium for which the campaign content will be retrieved.  
Default: `web`.

<hr>

```typescript
  @Prop() contentType: string = "banner_order_status_page";
  // not requirerd
  // eg.:
  <pl-cm-banner content-type="email_banner">
```

Sets the content type of the retrieved campaignthat will be rendered.  
Default: `banner_order_status_page`.

<hr>

```typescript
  @Prop() bannerType: string = "mainBannerVertical";
  // not requirerd
  // eg.:
  <pl-cm-banner banner-type="bannerHorizontal">
```

Chooses what banner fomr the content type of the retrieved campaign will be rendered.  
Default: `mainBannerVertical`.

<hr>

```typescript
  @Prop() language: string;
  // not requirerd
  // eg.:
  <pl-cm-banner language="en">

```

Sets the users language - to prevent campaigns from different languages to be rendered.  
Default: `undefined`
