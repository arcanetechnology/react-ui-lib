import { useContext } from "react";
import { PortalContext } from "../ArcaneUIProvider";

export default function usePortalComponent() {
  const PortalComponent = useContext<React.ComponentType<any> | null>(PortalContext);

  if (!PortalComponent) {
    throw new Error('PortalContext not provided in ArcaneUIProvider. Wrap your application inside an ArcaneUIProvider component.')
  }

  return PortalComponent;
}
