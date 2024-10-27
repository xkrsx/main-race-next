import Link from 'next/link';

export default function Nav() {
  return (
    <ul>
      <li>MENU</li>
      <li>
        <Link href="/race">race</Link>
      </li>
      <li>
        <Link href="/profile">profile</Link>
      </li>
      <li>
        <Link href="/ranking">ranking</Link>
      </li>
      <li>
        <a
          target="_blank"
          href="https://web.archive.org/web/20231203075654/https://pcmc2023.pl/"
          rel="noreferrer"
        >
          pcmc www
        </a>
      </li>
    </ul>
  );
}
