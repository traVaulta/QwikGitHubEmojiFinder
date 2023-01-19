import { Emoji } from '~/core/domain/emoji/model';

export interface EmojiGroup {
  name: string;
  list: Emoji[];
}
