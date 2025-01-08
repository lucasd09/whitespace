'use client';

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { useActionMutation } from "@/lib/hooks/use-action-mutation";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { z } from "zod";
import { subscribe } from "./actions";

const SubscriptionFormSchema = z.object({
  email: z.string().email(),
});
export type SubscriptionFormData = z.infer<typeof SubscriptionFormSchema>;

export const SubscriptionForm = () => {

  const form = useZodForm({
    schema: SubscriptionFormSchema,
  });

  const { mutate, isPending } = useActionMutation({
    action: subscribe,
    throwOnUndefined: false,
  });

  return <Form
    form={form}
    onSubmit={mutate}
    className="text-start"
  >
    <Input
      name="email"
      form={form}
    />
    <Button
      isLoading={isPending}
      type="submit"
      className="w-full"
    >
      Subscribe
    </Button>
  </Form>
}