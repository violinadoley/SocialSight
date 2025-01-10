// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Langflow Next.js App
      </h1>
      <p className="text-lg mb-6 max-w-xl">
        This application demonstrates how to integrate Langflow with Next.js 13 and Tailwind CSS.
      </p>
      <Link
        href="/chat"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Go to Chat
      </Link>
    </div>
  );
}
