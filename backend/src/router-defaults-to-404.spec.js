import { jest } from '@jest/globals';
import router from './router.js';

describe('Router', () => {
    it('should defaults to 404', async () => {
        // Arrange
        const req = { url: 'flibble' };
        const res = { setHeader: jest.fn(), end: jest.fn() };

        // Act
        router(req, res);

        // Assert
        expect(res.statusCode).toBe(404);
        expect(res.end.mock.calls.length).toBe(1);
        expect(res.setHeader.mock.calls.length).toBe(3);
    });
});
