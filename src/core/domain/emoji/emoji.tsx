import { component$ } from '@builder.io/qwik';

import { Emoji } from '~/core/domain/emoji/model';

export interface EmojiProps {
  emoji: Emoji;
}

export default component$(({ emoji }: EmojiProps) => (
  <div class="w-16 h-16 cursor-pointer" title={ emoji.description }>
    { emoji.content }
  </div>
));
