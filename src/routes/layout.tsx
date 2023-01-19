import { component$, Slot } from '@builder.io/qwik';

import Header from '../infra/lib/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header/>
        <section class="h-full max-w-4xl mx-auto">
          <Slot/>
        </section>
      </main>
      <footer class="fixed bottom-0 left-0 w-full flex justify-center">
        Matija Čvrk ©, 2023
      </footer>
    </>
  );
});
