import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    })
  ).json();

  return res.map((item: { id: string }) => ({ id: item.id.toString() }));
};

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    ).json();

    if (!res.title) {
      return notFound();
    } else {
      return <div className="text-red-500">{res.title}</div>;
    }
  } catch (error: unknown) {
    return console.log("error fetching the data", error);
  }
}
