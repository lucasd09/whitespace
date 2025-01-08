import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "./_utils";
import { userId } from "./users.schema";

export const subscriptionsTable = pgTable("subscriptions", {
  id: id(),
  userId: userId(),
  email: text().notNull(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});
