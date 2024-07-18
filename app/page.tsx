import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-mono font-semibold">NextJS APIs tutorial</h1>
      <Link href={'/docs'} className="text-blue-700 underline">View the Swagger UI docs</Link>
    </main>
  );
}
