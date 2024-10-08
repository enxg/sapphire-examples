import { ApplyOptions } from '@sapphire/decorators';
import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import type { StringSelectMenuInteraction } from 'discord.js';

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.SelectMenu
})
export class MenuHandler extends InteractionHandler {
    public override async run(interaction: StringSelectMenuInteraction) {
        await interaction.reply({
            // Remember how we can have multiple values? Let's get the first one!
            content: `You selected: ${interaction.values[0]}`
        });
    }

    public override parse(interaction: StringSelectMenuInteraction) {
        if (interaction.customId !== 'my-echo-select') return this.none();

        return this.some();
    }
}