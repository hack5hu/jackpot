export type Provider = { name: string; image: string; id: string };
export type ProviderSectionProps = {
  providers: Provider[];
  scrollRefs: RefObject<HTMLDivElement | null>;
  handleClick: (provider: Provider) => void;
  selectedProvider?: Provider | null | undefined;
};


