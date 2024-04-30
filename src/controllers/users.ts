import { Context } from 'hono';
import { logger } from '../util/logger';
import { User } from '../infrastructures/repositories/entities/user';

export const get = async (c: Context) => {
	logger.info('[START]', 'users', 'get');

	const stmt = await c.env.DB.prepare(`SELECT * FROM users;`);
	const users: D1Result<User> = await stmt.all();


	logger.debug({ users });
	logger.info('[END]', 'users', 'get');

	return c.json({ users });
};
