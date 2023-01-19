import {
  extractEmojisWithContentAndDescriptionAsync,
  extractEmojisWithDescriptionAndGroupAsync
} from './emoji.data';
import { Emoji } from '~/core/domain/emoji/model';
import { EmojiDataAccessAsyncFunction } from '~/core/domain/group/daf';
import { EmojiGroup } from '~/core/domain/group/model';
import { GroupType } from '~/core/domain/group/type/model';

export const extractDataFromSource: EmojiDataAccessAsyncFunction = async (filter: GroupType) => {
  const emojisRaw = await extractEmojisWithContentAndDescriptionAsync();
  const emojisLabeledRaw = await extractEmojisWithDescriptionAndGroupAsync();

  const registry = emojisRaw.reduce((acc, emoji) => ({
    ...acc,
    [emoji.description]: emoji
  }), <{ [k: string]: Emoji }>{});
  const registryLabeled = emojisLabeledRaw.reduce((acc, emoji) => ({
    ...acc,
    [emoji.description]: emoji
  }), <{ [k: string]: Emoji }>{});

  const emojiResult: Emoji[] = [];
  Object.keys(registry).forEach(description => {
    emojiResult.push(<Emoji>{
      content: registry[description].content,
      description: description
        .replace(/[:`]/g, '')
        .replace(/_/g, ' '),
      group: registryLabeled[description].group
    });
  });
  const groups = emojiResult
    .reduce((acc, emoji) => ({
      ...acc,
      [emoji.group]: [...((emoji.group in acc) ? acc[emoji.group] : []), emoji]
    }), (<{ [group: string]: Emoji[] }>{}));
  return Object.keys(groups)
    .reduce((acc, group) => [
      ...acc,
      <EmojiGroup>{ name: group, list: groups[group] }
    ], <EmojiGroup[]>[])
    .filter(group => !filter.length || group.name === `${filter}`);
};
