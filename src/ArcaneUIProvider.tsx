import { createContext } from "react";

export const LinkContext = createContext<React.ComponentType<any> | null>(null);
export const PortalContext = createContext<React.ComponentType<any> | null>(null);

interface Props {
  LinkComponent: React.ComponentType<any>;
  PortalComponent: React.ComponentType<any>;
  children: React.ReactNode;
};

export default function ArcaneUIProvider({ LinkComponent, PortalComponent, children }: Props) {
  return (
    <LinkContext.Provider value={LinkComponent}>
      <PortalContext.Provider value={PortalComponent}>
        {children}
      </PortalContext.Provider>
    </LinkContext.Provider>
  );
}
