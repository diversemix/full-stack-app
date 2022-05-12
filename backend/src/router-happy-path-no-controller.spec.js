import { jest } from '@jest/globals';
import mockController from './helper';

describe('Router', () => {

    it('happy day with no controller - 200', async () => {
        // Arrange
        const req = { method: 'GET', url: 'https://somewhere/widgets' };
        const res = { setHeader: jest.fn(), end: jest.fn() };

        const widgetController = await mockController('./widgets/controller.js');
        const {default: router} = await import('./router.js');

        // Act
        router(req, res);

        // Assert
        expect(res.statusCode).toBe(200);
        expect(widgetController).toHaveBeenCalled();
        expect(widgetController).toHaveBeenCalledWith(
            'GET', 
            expect.objectContaining({href: 'https://somewhere/widgets'})
        );
        expect(res.end.mock.calls.length).toBe(1);
        expect(res.end).toHaveBeenCalledWith('BodyText');
        expect(res.setHeader.mock.calls.length).toBe(3);
    });
});
