import React from "react";
import styles from "./ProviderSection.module.scss";
import Image from "next/image";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import { IMAGES } from "@/assets/image/image";
import ViewAllControl from "../ViewAllWithArrows/ViewAllWithArrows";
import Link from "next/link";

type Props = {
  providers: { name: string; image: string; id: string }[];
  scrollRefs: React.RefObject<HTMLDivElement>;
  handleClick: (id:string) => void;
};

const ProviderSection = ({ providers, scrollRefs, handleClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <IconWithText iconSrc={IMAGES.PROVIDERS} text="Providers" />
        <ViewAllControl isTextViewAll={false} scrollRef={scrollRefs} />
      </div>

      <div className={styles.scrollRow} ref={scrollRefs}>
        {providers.map((provider) => (
          <Link
            key={provider.id}
            href={`/provider/`}
            className={styles.logoWrapper}
            onClick={() => handleClick(provider.id)}
          >
            <Image
              src={provider.image}
              alt={provider.name}
              width={250}
              height={100}
              className={styles.logo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProviderSection;


