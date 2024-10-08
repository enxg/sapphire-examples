import { ApplyOptions } from '@sapphire/decorators';
import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import type { ModalSubmitInteraction } from 'discord.js';

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.ModalSubmit
})
export class ModalHandler extends InteractionHandler {
    public async run(interaction: ModalSubmitInteraction) {
        await interaction.reply({
            content: 'Thank you for submitting the form!',
            ephemeral: true
        });
    }

    public override parse(interaction: ModalSubmitInteraction) {
        if (interaction.customId !== 'hello-popup') return this.none();

        return this.some();
    }
}