import { component$ } from '@builder.io/qwik';

import Group from '~/core/domain/group';
import { EmojiGroup } from '~/core/domain/group/model';

export interface FunnelResultsProps {
  groups: EmojiGroup[];
}

export default component$(({ groups }: FunnelResultsProps) => (
  <>
    {groups.map(group => <Group group={group}></Group>)}
  </>
));
