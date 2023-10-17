import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("POST /api/employees", () => {
    beforeEach(async () => {
      await generateTestDb(app);
    });
  
    afterEach(async () => {
      await destroyTestDb(app);
    });
    
    it("should return true when employee is added", async() => {
        const res = await app.inject({
            url: "/api/employees",
            method: "POST",
            body: {
                name: "Silent Bob",
                title: "Just a funny guy",
                tribe_id: 1
            }
          });

        const response = res.json();
        expect(response.success).toEqual(true);
    });
});