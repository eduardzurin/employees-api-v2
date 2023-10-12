import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesModel from "../models/employees.model";
import { EmployeeBodySchema, EmployeeBodyType } from "./schemas";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "POST",
    url: "/api/employees",
    schema: {
      body: EmployeeBodySchema,
    },
    handler: async (request, reply) => {
      const employeeBody = request.body as EmployeeBodyType;
      const id = await employeesModel.createEmployee(fastify, employeeBody);
      reply.code(201).send({ success: true, id });
    },
  };
}
