import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 dark">
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
        404 · signal lost
      </p>
      <h1 className="font-display font-bold text-5xl text-text mb-4">
        This page fused into nothing.
      </h1>
      <p className="text-muted max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
        you back to something real.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary text-background font-medium px-6 py-3 text-sm hover:scale-[1.03] transition-transform"
      >
        Back to home
      </Link>
    </div>
  );
}
