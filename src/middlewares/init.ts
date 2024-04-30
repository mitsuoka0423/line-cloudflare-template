import { Context, Next } from 'hono';
import { init as initLine } from '../infrastructures/apis/line';
import { init as initDB } from '../infrastructures/repositories/db';

export const init = async (c: Context, next: Next) => {
	const { LINE_CHANNEL_ACCESS_TOKEN, OPENAI_API_KEY, DB } = c.env;

	initLine({ channelAccessToken: LINE_CHANNEL_ACCESS_TOKEN });
	initDB({ database: DB });

	await next();
};
