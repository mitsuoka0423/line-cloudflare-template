import { fetchProfile } from '../infrastructures/line';
import { save } from '../infrastructures/user';
import { logger } from '../util/logger';

export const execute = async ({ lineId }: { lineId: string }): Promise<void> => {
	logger.info('[START]', 'registerUser', 'execute');
	logger.debug({ lineId });

	const user = await fetchProfile({ userId: lineId });;
	await save(user);

	logger.info('[END]', 'registerUser', 'execute');
};
