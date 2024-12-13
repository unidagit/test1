import Link from "next/link";
import React from "react";

export default function LeftBar() {
  return (
    <div className="flex flex-col p-6">
      <h2 className="text-2xl font-extrabold mb-6">PERSON</h2>
      <div className="flex flex-col gap-3">
        <Link href="/" className="underline underline-offset-4">
          All
        </Link>
        <Link
          href="/category/technology"
          className="underline underline-offset-4"
        >
          Technology
        </Link>
      </div>
    </div>
  );
}
