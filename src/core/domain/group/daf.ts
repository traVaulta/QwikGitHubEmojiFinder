import { EmojiGroup } from '~/core/domain/group/model';
import { GroupType } from '~/core/domain/group/type/model';

export type EmojiDataAccessAsyncFunction = (filter: GroupType) => Promise<EmojiGroup[]>;
