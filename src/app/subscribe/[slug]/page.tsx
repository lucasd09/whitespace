import { notFound } from "next/navigation";
import Image from "next/image";
import { PageWithParams } from "@/lib/types";
import { userService } from "@/services/user";
import { SubscriptionForm } from "./_components/subscription-form";

export default async function Page({ params }: PageWithParams) {
  const slug = (await params).slug;

  const data = await userService.getById(Number(slug));

  if (!data) {
    notFound()
  }

  return (
    <div className="w-full max-w-md mx-auto text-center space-y-4">
      <div className="relative w-20 h-20 mx-auto">
        <Image
          src={data.picture ?? ''}
          alt="Newsletter author"
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-medium">
          {data.name}
        </h1>
        <p className="text-sm text-gray-600">
          Hey, I want you to join my newsletter!
        </p>
      </div>

      <SubscriptionForm />
    </div>
  )
}

