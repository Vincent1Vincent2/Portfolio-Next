import { ClosedMenu } from "@/assets/menu/ClosedMenu";
import { NavLogo } from "@/assets/menu/NavLogo";
import "../header/header.css";

export function Header() {
  return (
    <header>
      <NavLogo />
      <ClosedMenu />
    </header>
  );
}
