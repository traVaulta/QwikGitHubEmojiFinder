import { GroupType } from '~/core/domain/group/type/model';

export interface Emoji {
  content: string;
  description: string;
  group: GroupType;
}
