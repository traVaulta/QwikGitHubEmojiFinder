import { component$, Resource, ResourceReturn } from '@builder.io/qwik';

import FunnelResults from '~/core/domain/funnel/results';
import { EmojiGroup } from '~/core/domain/group/model';

export interface FunnelContentProps {
  groupsResource: ResourceReturn<EmojiGroup[]>;
}

export default component$(({ groupsResource }: FunnelContentProps) => {
  return (
    <Resource
      value={groupsResource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>No emojis of that type found...</div>}
      onResolved={(groups: EmojiGroup[]) => (
        <div class="h-full m-4 max-w-4xl flex flex-wrap">
          <FunnelResults groups={groups} />
        </div>
      )}
    />
  );
});
