import { db } from "../db/client";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const resolvers = {
  Query: {
    users: async () => {
      return db.select().from(users);
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      const [newUser] = await db
        .insert(users)
        .values({ name: args.name, email: args.email })
        .returning();
      return newUser;
    },
  },
};
