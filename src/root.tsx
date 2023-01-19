import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import globalStyles from './global.css?inline';
import { RouterHead } from './infra/lib/router-head/router-head';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8"/>
        <link rel="manifest" href="/manifest.json"/>
        <RouterHead/>
      </head>
      <body lang="en">
      <RouterOutlet/>
      <ServiceWorkerRegister/>
      </body>
    </QwikCityProvider>
  );
});
