import { getBillionsItem } from "@/utils/api";
import Image from "next/image";
import React from "react";

type ParamsType = {
  id: string;
};

export default async function PersonPage({
  params,
}: {
  params: Promise<ParamsType>;
}) {
  const resolvedParams = await params; // Promise를 해제
  const { id } = resolvedParams;
  const itemData = await getBillionsItem(id);
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <Image
        src={itemData.squareImage}
        width={200}
        height={200}
        alt={itemData.name}
        className="rounded-sm"
      />
      <p>{itemData.name}</p>
      <p>{Math.floor(itemData.netWorth)}</p>
    </div>
  );
}
