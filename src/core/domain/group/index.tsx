import { component$ } from '@builder.io/qwik';

import Emoji from '~/core/domain/emoji/emoji';
import { EmojiGroup } from '~/core/domain/group/model';

export interface GroupProps {
  group: EmojiGroup;
}

export default component$(({ group }: GroupProps) => (
  <>
    { group.list.map(emoji => <Emoji emoji={emoji}></Emoji>) }
  </>
));
