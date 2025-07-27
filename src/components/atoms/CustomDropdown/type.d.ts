export type Option = {
  id: "asc" | "desc";
  name: string;
};

export type DropDownProps = {
  selectedItem?: Option;
  setSelectedItem: (option: Option) => void;
};