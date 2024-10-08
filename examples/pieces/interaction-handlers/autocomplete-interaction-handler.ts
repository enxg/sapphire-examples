import { ApplyOptions } from '@sapphire/decorators';
import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { AutocompleteInteraction, type ApplicationCommandOptionChoiceData } from 'discord.js';

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Autocomplete
})
export class AutocompleteHandler extends InteractionHandler {
    public override async run(interaction: AutocompleteInteraction, result: ApplicationCommandOptionChoiceData[]) {
        return interaction.respond(result);
    }

    public override async parse(interaction: AutocompleteInteraction) {
        // Only run this interaction for the command with ID '1000000000000000000'
        if (interaction.commandId !== '1000000000000000000') return this.none();
        // Get the focussed (current) option
        const focusedOption = interaction.options.getFocused(true);
        // Ensure that the option name is one that can be autocompleted, or return none if not.
        switch (focusedOption.name) {
            case 'search': {
                // Search your API or similar. This is example code!
                const searchResult = await myApi.searchForSomething(focusedOption.value);
                // Map the search results to the structure required for Autocomplete
                return this.some(searchResult.map((match) => ({ name: match.name, value: match.key })));
            }
            default:
                return this.none();
        }
    }
}