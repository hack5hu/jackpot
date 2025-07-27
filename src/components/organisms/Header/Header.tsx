"use client";
import AuthButtons from "@/components/molecules/AuthButtons/AuthButtons";
import styles from "./Header.module.scss";
import Image from "next/image";
import { IMAGES } from "@/assets/image/image";
import Button from "@/components/atoms/Button/Button";
import { gameStates } from "@/store/gameStates";
import Link from "next/link";

export default function Header() {
  const { setCategory, setSort, setSearchQuery } = gameStates();
  const clearFn = () => {
    setCategory?.("");
    setSort?.(null);
    setSearchQuery?.("");
  };
  return (
    <header className={styles.header} onClick={() => clearFn()}>
      <Link className={styles.left} href={"/"}>
        <Image
          src={IMAGES.LOGO_ICON}
          alt="Logo"
          width={30}
          height={26}
          className={styles.logoMobile}
        />
        <Image
          src={IMAGES.LOGO_FULL}
          alt="Logo"
          width={141}
          height={26}
          className={styles.logoDesktop}
        />
      </Link>

      <div className={styles.right}>
        <div className={styles.iconGroup}>
          <Button variant="icon">
            <Image
              src={IMAGES.SEARCH_ICON}
              alt="Search"
              width={16}
              height={16}
            />
          </Button>

          <Button variant="icon">
            <Image
              src={IMAGES.PEOPLE_THINKING}
              alt="Help"
              width={26}
              height={26}
            />
          </Button>
        </div>

        <AuthButtons />
      </div>
    </header>
  );
}

