import styles from './index.module.scss';
import ArcaneLogo from '../ArcaneLogo';
import useLinkComponent from '../../hooks/useLinkComponent';
import Heart from '../../svg/Heart';
import Twitter from '../../svg/Twitter';
import LinkedIn from '../../svg/LinkedIn';
import FooterLink from './FooterLink';

const LINKS = {
  PLATFORM: 'PLATFORM',
  LEARN: 'LEARN',
  RESEARCH: 'RESEARCH',
  TRADE: 'TRADE',
  INVEST: 'INVEST',
  PEOPLE: 'PEOPLE',
  PRIVACY: 'PRIVACY'
};

export interface Props {
  /**
   * App home page URL, used to redirect when the user clicks on the logo
   */
  homeUrl: string;
  /**
   * URL origin, used to apply relative links to, e.g. https://arcane.no
   */
  origin: string;
  /**
   * The currently active link.
   * All options available inside the Footer.LINKS object.
   */
  activeLink?: keyof typeof LINKS;
  /**
   * App-specific logo displayed next to the Arcane one.
   */
  appLogo?: React.ReactNode;
  /**
   * Temporary solution to hide the research link before the first release of the Research app
   */
  hideResearch?: boolean;
}

/**
 * Global footer component.
 */
export default function Footer({ homeUrl, origin, activeLink, appLogo, hideResearch = false }: Props) {
  const LinkComponent = useLinkComponent();

  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <ArcaneLogo homeUrl={homeUrl} appLogo={appLogo} onDark />
        </div>

        <ul className={styles.menuList}>
          <li className={styles.menu}>
            <div className={styles.title}>Menu</div>

            <div className={styles.links}>
              <FooterLink white active={activeLink === LINKS.PLATFORM}>
                <LinkComponent href={origin}>
                  Platform
                </LinkComponent>
              </FooterLink>

              {!hideResearch ? (
                <FooterLink white active={activeLink === LINKS.RESEARCH}>
                  <LinkComponent href={`${origin}/research`}>
                    Research
                  </LinkComponent>
                </FooterLink>
              ) : (
                <FooterLink white active={activeLink === LINKS.LEARN}>
                  <LinkComponent href={`${origin}/learn`}>
                    Learn
                  </LinkComponent>
                </FooterLink>
              )}

              <FooterLink white active={activeLink === LINKS.TRADE}>
                <LinkComponent href={`${origin}/trade`}>
                  Trade
                </LinkComponent>
              </FooterLink>

              <FooterLink white active={activeLink === LINKS.INVEST}>
                <LinkComponent href={`${origin}/invest`}>
                  Invest
                </LinkComponent>
              </FooterLink>
            </div>
          </li>

          <li className={styles.menu}>
            <div className={styles.title}>Company</div>

            <div className={styles.links}>
              <FooterLink white active={activeLink === LINKS.PEOPLE}>
                <LinkComponent href={`${origin}/people`}>People</LinkComponent>
              </FooterLink>

              <FooterLink white>
                <LinkComponent href="https://investor.arcanecrypto.se/news/" target="_blank">Investor Relations</LinkComponent>
              </FooterLink>

              <FooterLink white active={activeLink === LINKS.PRIVACY}>
                <LinkComponent href={`${origin}/privacy`}>Privacy</LinkComponent>
              </FooterLink>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>© All rights reserved to Arcane.</div>
        <div className={styles.madeIn}>Made with <Heart /> in Norway</div>
        <div className={styles.social}>
          <div className={styles.text}>Follow us</div>
          <a href="https://twitter.com/arcane_crypto" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/company/arcane-crypto/" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}

Footer.LINKS = LINKS;
