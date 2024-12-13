import { getBillionsList } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const data = await getBillionsList();

  return (
    <div className="flex  justify-center">
      <ul className="grid grid-cols-3 gap-6 ">
        {data.map((item) => {
          return (
            <li key={item.id} className="flex flex-col">
              <Link href={`/person/${item.id}`} className="overflow-hidden">
                <Image
                  src={item.squareImage}
                  width={200}
                  height={200}
                  alt={item.name}
                  className="rounded-sm"
                />
              </Link>
              <div className="mt-2">
                <p className="font-bold ">{item.industries}</p>
                <h5>{item.name}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}