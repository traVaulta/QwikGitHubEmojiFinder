import { component$ } from '@builder.io/qwik';

import GitHubLogo from '../logos/github';
import { QwikLogo } from '../logos/qwik';

export default component$(() => {
  return (
    <header>
      <div class="flex flex-col justify-center items-center">
        <div class="flex mt-10">
          <div class="flex items-center w-4/12">
            <QwikLogo/>
            <GitHubLogo/>
          </div>
          <div>
            <div class="flex items-baseline">
              <h1 class="block">GitHub Emoji Finder</h1>
              <h4 class="block italic ml-4">
                Find the right emoji for you
              </h4>
            </div>
            <p>Choose through the menu or by typing into the search bar...</p>
          </div>
        </div>
      </div>
    </header>
  );
});
