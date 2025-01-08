"use server";

import { ActionResult } from "@/lib/types";
import { SubscriptionFormData } from "./subscription-form";
import { subscriptionservice } from "@/services/subscription";
import { headers } from "next/headers";

export const subscribe = async (
  data: SubscriptionFormData,
): Promise<ActionResult<SubscriptionFormData>> => {
  try {
    const headersList = await headers();
    const referer = headersList.get("referer") || "";
    const urlParts = referer.split("/");
    const userId = Number(urlParts[urlParts.length - 1]);

    await subscriptionservice.create({ email: data.email, userId });

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
