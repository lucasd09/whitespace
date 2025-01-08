import { subscriptionsTable } from "@/db/schemas/subscriptions.schema";
import { Subscription, SubscriptionInsert } from "@/models/subscription.model";
import { createService } from "../_base";

export const subscriptionservice = createService<
  Subscription,
  SubscriptionInsert
>(subscriptionsTable);
