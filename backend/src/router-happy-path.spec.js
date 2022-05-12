import { jest } from "@jest/globals";
import router from "./router.js";

describe("Function", () => {
    it("happy day - 200", async () => {
        // Arrange
        const req = { method: "GET", url: "https://somewhere/widgets" };
        const res = { setHeader: jest.fn(), end: jest.fn() };

        // Act
        router(req, res);

        // Assert
        expect(res.statusCode).toBe(200);
        expect(res.end.mock.calls.length).toBe(1);
        expect(res.setHeader.mock.calls.length).toBe(3);
    });
});
