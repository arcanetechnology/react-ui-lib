import React from "react";
import useLinkComponent from "../../hooks/useLinkComponent";

export interface Props {
  /**
   * Anchor tag or Link component href attribute, a link URL.
   */
  href?: string,
  /**
   * Component content.
   */
  children: React.ReactNode,
  /**
   * Additional props passed directly to the generated component (e.g. onClick handler, target).
   */
  [propName: string]: any;
}

/**
 * Generates a clickable element - &lt;a&gt;, &lt;LinkComponent&gt; provided from the ArcaneUIProvider, or &lt;button&gt; depending on whether the href prop is defined.
 *
 * - When href is missing: generates a button, and usually expects an onClick handler;
 * - When href and target are both provided, generated an anchor (&lt;a&gt;) tag;
 * - When href is provided but target is not, generated the provided LinkComponent from ArcaneUIProvider.
 *
 * This component is usually a building block for other components and does not bring its own styles.
 */
export default function Clickable({ href, children, ...props }: Props) {
  const LinkComponent = useLinkComponent();

  return href
    ? props.target
      ? <a href={href} {...props}>{children}</a>
      : <LinkComponent href={href} {...props}>{children}</LinkComponent>
    : <button type="button" {...props}>{children}</button>
};
