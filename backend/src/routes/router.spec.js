import router from "./router.js";
import {jest} from '@jest/globals';

describe("Function",() => {
    it('should doX',() => {
        // Arrange
        const req = { url: 'flibble'};
        const res = { setHeader: jest.fn(), end: jest.fn() };

        // Act
        router(req, res);

        // Assert
        expect(res.statusCode).toBe(404);
        expect(res.end.mock.calls.length).toBe(1);
        expect(res.setHeader.mock.calls.length).toBe(3);
    })
});
