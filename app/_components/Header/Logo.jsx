import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <>
      <div className={`${styles.logo__wrapper} logo__wrapper`}>
        <Link
          className={`${styles.logo} ttlogo absolute inline-block leading-none outline-none`}
          href="/"
        >
          <Image
            src="/images/f-logo.png"
            alt="Logo"
            className={styles.logo__img}
            width={260}
            height={260}
            style={{ height: "auto" }}
            priority
          />
        </Link>
      </div>
    </>
  );
};
export default Logo;
