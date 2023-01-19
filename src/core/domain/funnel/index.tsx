import { component$, useContext, useResource$ } from '@builder.io/qwik';

import FunnelContent from '~/core/domain/funnel/content';
import { EmojiGroupContext } from '~/core/domain/group/context';
import { ALL_GROUP_TYPES, GroupType } from '~/core/domain/group/type/model';
import { extractDataFromSource } from '~/infra/data/emoji.group.data';

export default component$(() => {
  const state = useContext(EmojiGroupContext);
  const resources = [
    useResource$(() => extractDataFromSource(GroupType.FACES)),
    useResource$(() => extractDataFromSource(GroupType.GESTURES)),
    useResource$(() => extractDataFromSource(GroupType.FOOD)),
    useResource$(() => extractDataFromSource(GroupType.PEOPLE)),
    useResource$(() => extractDataFromSource(GroupType.NATURE)),
    useResource$(() => extractDataFromSource(GroupType.PLACES)),
    useResource$(() => extractDataFromSource(GroupType.BUILDINGS)),
    useResource$(() => extractDataFromSource(GroupType.UTILITY)),
    useResource$(() => extractDataFromSource(GroupType.HOLIDAY)),
    useResource$(() => extractDataFromSource(GroupType.TRANSPORTATION)),
    useResource$(() => extractDataFromSource(GroupType.SPORTS)),
    useResource$(() => extractDataFromSource(GroupType.FLAGS)),
    useResource$(() => extractDataFromSource(GroupType.SIGNS)),
    useResource$(() => extractDataFromSource(GroupType.OTHER))
  ];
  return (
    <>
      {resources
        .filter((_, i) => ALL_GROUP_TYPES
          .map(groupType => `${groupType}`)
          .indexOf(state.filter) === i
        )
        .map(resource => <FunnelContent groupsResource={resource} />)
      }
    </>
  )
});
