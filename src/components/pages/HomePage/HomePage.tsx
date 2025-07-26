import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate";
import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const props = useHomePage();
  return (
    <>
      <div style={{margin:30}}/>
      <HomeTemplate {...props} />
    </>
  );
}

