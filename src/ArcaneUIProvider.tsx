import { createContext } from "react";

export const LinkContext = createContext<React.ComponentType<any> | null>(null);

interface Props {
  LinkComponent: React.ComponentType<any>;
  children: React.ReactNode;
};

export default function ArcaneUIProvider({ LinkComponent, children }: Props) {
  return (
    <LinkContext.Provider value={LinkComponent}>
      {children}
    </LinkContext.Provider>
  );
}
