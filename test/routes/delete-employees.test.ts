import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("DELETE /api/employees/:id", () => {
    beforeEach(async () => {
      await generateTestDb(app);
    });
  
    afterEach(async () => {
      await destroyTestDb(app);
    });
    
    it("should return true after employee is deleted", async() => {
        const res = await app.inject({
            url: "/api/employees/1",
            method: "DELETE",
          });

        const response = res.json();
        expect(response.success).toEqual(true);
    });

    it("should return validation error when id is not number", async () => {
        const res = await app.inject({
          url: "/api/employees/iHateMyLife",
          method: "DELETE",
        });
    
        const response = res.json();
        const statusCode = res.statusCode;
    
        expect(statusCode).toEqual(400);
        expect(response).toEqual(
          expect.objectContaining({
            message: "params/id must be integer",
          })
        );
    });
});