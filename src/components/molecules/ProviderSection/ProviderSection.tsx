import React from "react";
import styles from "./ProviderSection.module.scss";
import Image from "next/image";
import IconWithText from "@/components/atoms/IconWithText/IconWithText";
import { IMAGES } from "@/assets/image/image";
import ViewAllControl from "../ViewAllWithArrows/ViewAllWithArrows";
import Link from "next/link";
import CheckIcon from "@/assets/icons/CheckIcon";

type Provider = { name: string; image: string; id: string };
type Props = {
  providers: Provider[];
  scrollRefs: React.RefObject<HTMLDivElement>;
  handleClick: (provider: Provider) => void;
  selectedProvider?: Provider;
};

const ProviderSection = ({
  providers,
  scrollRefs,
  handleClick,
  selectedProvider,
}: Props) => {
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
            onClick={() => handleClick(provider)}
          >
            {selectedProvider?.id === provider.id && (
              <div className={styles.logoTextWrapper}>
                <CheckIcon />
              </div>
            )}
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





