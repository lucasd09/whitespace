import { subscriptionsTable } from "@/db/schemas/subscriptions.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Subscription = InferSelectModel<typeof subscriptionsTable>;
export type SubscriptionInsert = InferInsertModel<typeof subscriptionsTable>;
