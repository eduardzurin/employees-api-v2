import { FastifyInstance, RouteOptions } from "fastify";

const EMPLOYEES_REPORT_CACHE_KEY = "employeesReport";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "DELETE",
    url: "/api/cache",
    handler: async (request, reply) => {
        await fastify.cache.del(EMPLOYEES_REPORT_CACHE_KEY);
        reply.code(200).send({success: true});
    },
  };

}

