import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
    description: 'A basic command'
})
export class UserCommand extends Command {
    public override async messageRun(message: Message) {
        return message.channel.send('Hello world!');
    }
}