import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <logo class="text-center ml-4">
      <a href="https://github.com/about">
        <img
          alt="GitHub Logo"
          width={400}
          height={320}
          src="https://github.com/fluidicon.png"
        />
      </a>
    </logo>
  );
});
