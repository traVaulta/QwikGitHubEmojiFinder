import { component$, useContext } from '@builder.io/qwik';

import { GroupType } from '../type/model';
import { EmojiGroupContext } from '~/core/domain/group/context';

export interface GroupPickerProps {
  group: GroupType;
}

export default component$(({ group }: GroupPickerProps) => {
  const state = useContext(EmojiGroupContext);
  const groupType = `${group}`;
  return (
    <button
      type="button"
      class="h-12 w-36 m-4 text-white bg-teal-600 outline-0 border-0 cursor-pointer capitalize"
      onClick$={() => state.filter = groupType}
    >
      {group}
    </button>
  );
});
