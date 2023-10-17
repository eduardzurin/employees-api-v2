import { FastifyInstance } from "fastify";

import deleteEmployeesId from "./delete-employees-id";
import getEmployees from "./get-employees";
import getEmployeesId from "./get-employees-id";
import postEmployees from "./post-employees";

import getTribes from "./get-tribes";
import getTribesId from "./get-tribes-id";

import getReportsEmployees from "./get-reports-employees";

import deleteCache from "./delete-cache";

export default async function (fastify: FastifyInstance) {
  fastify.route(getEmployees(fastify));
  fastify.route(getEmployeesId(fastify));
  fastify.route(deleteEmployeesId(fastify));
  fastify.route(postEmployees(fastify));

  fastify.route(getTribes(fastify));
  fastify.route(getTribesId(fastify));

  fastify.route(getReportsEmployees(fastify));

  fastify.route(deleteCache(fastify));
}
