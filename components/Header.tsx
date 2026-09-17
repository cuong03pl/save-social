import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { routes } from "@/config/routes";

export default function Header() {
  const menuItems = [
    { label: "Home", href: routes.home },
    { label: "Tải video Facebook", href: routes.facebook },
    { label: "Tải video Instagram", href: routes.instagram },
    { label: "About", href: routes.about },
  ];
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Save Social"
          width={40}
          height={40}
        />
        <span>Save Social</span>
      </Link>

      <nav className={styles.navigation}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.languageSelector}>
        <select id="language" defaultValue="en">
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </header>
  );
}
