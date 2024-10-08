import { Precondition } from '@sapphire/framework';
import type { ChatInputCommandInteraction, ContextMenuCommandInteraction, Message } from 'discord.js';

export class UserPrecondition extends Precondition {
    public override messageRun(message: Message) {
        return this.ok();
    }

    public override chatInputRun(interaction: ChatInputCommandInteraction) {
        return this.ok();
    }

    public override contextMenuRun(interaction: ContextMenuCommandInteraction) {
        return this.ok();
    }
}

declare module '@sapphire/framework' {
    interface Preconditions {
    /*{{name}}*/: never;
    }
}