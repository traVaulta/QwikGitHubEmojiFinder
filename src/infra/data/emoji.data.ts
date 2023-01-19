import { Emoji } from '~/core/domain/emoji/model';
import { GroupType } from '~/core/domain/group/type/model';
import { readFromSource } from '~/infra/data/file.access';

export const parseLineAsEmoji = (line: string) => line
  .split('|')
  .map(segment => segment.trim())
  .filter(segment => segment.length > 0);

export const extractEmojiAsync = (line: string, mapTo: (line: string) => Emoji): Promise<Emoji> =>
  new Promise((resolve, reject) => {
    try {
      resolve(mapTo(line));
    } catch (e: any) {
      reject(e);
    }
  });

const extractEmojiContentAndDescriptionAsync = (line: string) => extractEmojiAsync(line, (line: string) => {
  const values = parseLineAsEmoji(line);
  const [content, description] = values;
  return <Emoji>{
    content,
    description,
    group: GroupType.OTHER
  };
});

const extractEmojiDescriptionAndGroupAsync = (line: string) => extractEmojiAsync(line, (line: string) => {
  const values = parseLineAsEmoji(line);
  const [group, description] = values;
  return <Emoji>{
    content: '?',
    description,
    group: <GroupType>group
  };
});

export const extractEmojisWithContentAndDescriptionAsync = async () => {
  const txtSource = await readFromSource('emoji.list.txt');
  const lines = txtSource!.split('\r\n');
  return await Promise
    .all(lines.slice(2).map(extractEmojiContentAndDescriptionAsync));
};

export const extractEmojisWithDescriptionAndGroupAsync = async () => {
  const txtSource = await readFromSource('emoji.list.labeled.txt');
  const lines = txtSource!.split('\r\n');
  return await Promise
    .all(lines.slice(2).map(extractEmojiDescriptionAndGroupAsync));
};

