import { ApplyOptions } from '@sapphire/decorators';
import { methods, Route, type ApiRequest, type ApiResponse } from '@sapphire/plugin-api';

@ApplyOptions<Route.Options>({
    route: '/*{{name}}*/'
})
export class UserRoute extends Route {
    public [methods.GET](_request: ApiRequest, response: ApiResponse) {
        response.json({ message: 'Hello World' });
    }

    public [methods.POST](_request: ApiRequest, response: ApiResponse) {
        response.json({ message: 'Hello World' });
    }
}