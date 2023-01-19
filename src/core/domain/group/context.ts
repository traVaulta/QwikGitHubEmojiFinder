import { createContext } from '@builder.io/qwik';

export interface EmojiGroupContextModel {
  filter: string;
}

export const EmojiGroupContext = createContext<EmojiGroupContextModel>('emoji-group-context');
