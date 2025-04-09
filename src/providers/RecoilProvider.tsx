import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import DebugObserver from "@/components/common/DebugObserver/DebugObserver";

export function RecoilProvider({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <DebugObserver />
      {children}
    </RecoilRoot>
  );
}
