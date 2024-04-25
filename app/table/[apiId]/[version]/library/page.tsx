import { Library } from "@/components/templates";
import { Suspense } from "react";

export default function LibraryPage() {
  return (
    <Suspense>
      <Library />
    </Suspense>
  );
}
