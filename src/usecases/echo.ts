import { Message } from '@line/bot-sdk';

export const execute = async ({ message }: { message: string }): Promise<Message[]> => {
	return [
		{
			type: 'text',
			text: message,
		},
	];
};
