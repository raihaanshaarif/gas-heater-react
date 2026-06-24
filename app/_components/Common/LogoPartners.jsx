import Image from "next/image";
import styles from "./LogoPartners.module.css";
const imgData = [
  {
    id: 1,
    path: "/images/logo-partner-01.jpg",
    link: "/brands/bonaire/",
    alt: "Bonaire heating service melbourne",
  },
  {
    id: 2,
    path: "/images/logo-partner-02.jpg",
    link: "/brands/braemar/",
    alt: "Braemar heating service melbourne",
  },
  {
    id: 3,
    path: "/images/logo-partner-03.jpg",
    link: "/brands/brivis/",
    alt: "brivis heating service melbourne",
  },
  {
    id: 4,
    path: "/images/logo-partner-04.jpg",
    link: "/brands/kaden/",
    alt: "kaden heating service melbourne",
  },
  {
    id: 5,
    path: "/images/logo-partner-05.jpg",
    link: "/brands/rinnai/",
    alt: "rinnai heating service melbourne",
  },
  {
    id: 6,
    path: "/images/logo-partner-06.jpg",
    link: "/brands/pyrox/",
    alt: "pyrox heating service melbourne",
  },
  {
    id: 7,
    path: "/images/logo-partner-07.jpg",
    link: "/brands/vulcan/",
    alt: "vulkan heating service melbourne",
  },
];

const LogoPartners = ({ wrapperClass }) => {
  return (
    <div className={`${wrapperClass} md:mt-[11px]`}>
      {imgData.map(({ id, path, link, alt }) => (
        <a
          key={id}
          href={link}
          className={`${styles.hover__border} ${styles.hover__borderw2} cursor-pointer inline-flex justify-center relative z-[1] content-center items-center`}
        >
          <Image src={path} width={246} height={100} quality={0} alt={alt} />
        </a>
      ))}
    </div>
  );
};
export default LogoPartners;
