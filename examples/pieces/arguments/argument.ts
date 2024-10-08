import { ApplyOptions } from '@sapphire/decorators';
import { Argument } from '@sapphire/framework';

@ApplyOptions<Argument.Options>({})
export class UserArgument extends Argument<string> {
    public override run(parameter: string) {
        return this.ok(parameter);
    }
}

declare module '@sapphire/framework' {
    interface ArgType {
    /*{{name}}*/: string;
    }
}