import { EventMessage, Message, MessageEvent } from '@line/bot-sdk';
import { execute } from '../usecases/echo';
import { logger } from '../util/logger';

// TODO: MessageEvent のみに変更
export const handle = async (eventMessage: EventMessage, messageEvent: MessageEvent): Promise<Message[]> => {
	logger.info('[START]', 'messageEvent', 'handle');
	logger.debug({ eventMessage, messageEvent });

	if (!messageEvent.source.userId) {
		logger.error('メッセージイベントから userId を取得できませんでした。');
		logger.error({ messageEvent });
		throw new Error('メッセージイベントから userId を取得できませんでした。');
	}

	let messages: Message[] = [];

	if (eventMessage.type === 'text') {
		messages = await execute({ message: eventMessage.text });
	} else {
		messages = [
			{
				type: 'text',
				text: `未対応のメッセージです。`,
			},
		];
	}

	logger.debug({ messages });
	logger.info('[END]', 'messageEvent', 'handle');
	return messages;
};
