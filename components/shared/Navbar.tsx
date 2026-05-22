import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Rebecka</Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
