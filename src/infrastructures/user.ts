import { User } from '../domains/user';
import { logger } from '../util/logger';
import { findByLineId, save as saveRepository } from './repositories/user';

export const fetchByLineId = async (lineId: string): Promise<User> => {
	logger.info('[START]', 'user', 'fetchByLineId');
	logger.debug({ lineId });
	const userEntitiy = (await findByLineId(lineId)).user;

	logger.info('[START]', 'user', 'fetchByLineId');

	const user = {
		name: userEntitiy.name,
		lineId: userEntitiy.lineId,
	};

	logger.debug({ user });

	return user;
};

export const save = async (user: User): Promise<void> => {
	logger.info('[START]', 'user', 'save');
	logger.debug({ user });

	await saveRepository({ name: user.name, lineId: user.lineId });

	logger.info('[END]', 'user', 'save');
};
