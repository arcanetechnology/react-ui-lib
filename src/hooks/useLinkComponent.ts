import { useContext } from "react";
import { LinkContext } from "../ArcaneUIProvider";

export default function useLinkComponent() {
  const LinkComponent = useContext<React.ComponentType<any> | null>(LinkContext);

  if (!LinkComponent) {
    throw new Error('LinkComponent not provided in ArcaneUIProvider. Wrap your application inside an ArcaneUIProvider component.')
  }

  return LinkComponent;
}
