import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Funnel from '~/core/domain/funnel';
import { EmojiGroupContext } from '~/core/domain/group/context';
import Pickers from '~/core/domain/group/pickers';

export default component$(() => {
  const state = useStore({ filter: '' });
  useContextProvider(EmojiGroupContext, state);
  return (
    <div class="h-full w-full">
      <Pickers />
      <Funnel />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Menu',
  meta: [
    {
      name: 'landing-page',
      content: 'Landing page',
    },
  ],
};
