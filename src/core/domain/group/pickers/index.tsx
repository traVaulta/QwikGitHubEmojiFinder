import { component$ } from '@builder.io/qwik';

import GroupPicker from '~/core/domain/group/picker';
import { ALL_GROUP_TYPES } from '~/core/domain/group/type/model';

export default component$(() => (
  <div class="mb-10 flex flex-wrap max-h-52">
    {ALL_GROUP_TYPES.map(group => <GroupPicker key={group} group={group}/>)}
  </div>
));
