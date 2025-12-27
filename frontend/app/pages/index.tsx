import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>SCM Project</h1>
      <p>Welcome to the SCM Mini Project</p>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}
