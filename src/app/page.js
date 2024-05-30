import Image from "next/image";
import { AnimatedTooltipPreview } from "./Page/AnimatedTooltipPreview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedTooltipPreview />  
    </main>
  );
}
