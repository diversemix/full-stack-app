import { jest } from '@jest/globals';

export default async function mockController(modulePath) {
    const x = { handled: true, code: 200, body: 'BodyText' };
    jest.unstable_mockModule(modulePath, () => (
        {
            default: jest.fn().mockImplementation(() => x)
        }
    ));

    const {default: widgetController} = await import(modulePath);
    return widgetController;
}
