# tailwind-notifications-react

> simple and minimal notifications (toasts) component for use with react that you can use within seconds

[![NPM](https://img.shields.io/npm/v/tailwind-notifications-react.svg)](https://www.npmjs.com/package/tailwind-notifications-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tailwind-notifications-react --legacy-peer-deps
```

## Usage

### Setup Context Provider

Place the notifications context wrapper in the root of the application.

And import the css file like shown.

```tsx
import React, { Component } from 'react'
import { NotificationProvider } from 'tailwind-notifications-react'
import 'tailwind-notifications-react/dist/index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);

```

### How to use?

```tsx
import { useNotify } from "tailwind-notifications-react";

const MyComponent = () => {
  const notify = useNotify();

  return (
    <button
      onClick={() => {
        notify({
          title: "Nice",
          message: "Hello, this is message",
          type: "success",
        });
      }}
    >{`Press me`}</button>
  );
};

```

### About Me

I am a passionate coder who loves Typescript and React. I found myself reusing my old code for this notifications package wayy too often so I just made it a package for my own convenience.

While this was made for the purpose of a personal utility with minimalist goals in mind. I would love feedback and suggestions/feature requests with the true spirit of open source!

## License

MIT © [sankalpmukim](https://github.com/sankalpmukim)
