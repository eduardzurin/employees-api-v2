import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("GET /api/reports/employees", () => {
    beforeEach(async () => {
      await generateTestDb(app);
    });
  
    afterEach(async () => {
      await destroyTestDb(app);
    });
    
    it("should return correct number of employees of Internstellar tribe", async() => {
        const res = await app.inject({
            url: "/api/reports/employees",
            method: "GET",
          });
        
        const response = res.json();
        expect(response[0].employees.length).toEqual(3);
    });
});