import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import SuperJSON from "superjson";

export const generateSSGHelper = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: { prisma, currentUser: null },
    transformer: SuperJSON,
  });
