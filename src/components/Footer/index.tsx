import styles from './index.module.scss';
import ArcaneLogo from '../ArcaneLogo';
import useLinkComponent from '../../hooks/useLinkComponent';
import Heart from '../../svg/Heart';
import Twitter from '../../svg/Twitter';
import LinkedIn from '../../svg/LinkedIn';
import FooterLink from './FooterLink';

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
   * The currently active path (e.g. /learn)
   */
  currentPath: string;
}

/**
 * Global footer component.
 */
export default function Footer({ homeUrl, origin, currentPath }: Props) {
  const LinkComponent = useLinkComponent();

  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <LinkComponent href={homeUrl}>
            <ArcaneLogo onDark />
          </LinkComponent>
        </div>

        <ul className={styles.menuList}>
          <li className={styles.menu}>
            <div className={styles.title}>Menu</div>

            <div className={styles.links}>
              <FooterLink white active={currentPath === '/'}>
                <LinkComponent href={homeUrl}>
                  Home
                </LinkComponent>
              </FooterLink>

              <FooterLink white active={currentPath === '/learn'}>
                <LinkComponent href={`${origin}/learn`}>
                  Learn
                </LinkComponent>
              </FooterLink>

              <FooterLink white active={currentPath === '/trade'}>
                <LinkComponent href={`${origin}/trade`}>
                  Trade
                </LinkComponent>
              </FooterLink>

              <FooterLink white active={currentPath === '/invest'}>
                <LinkComponent href={`${origin}/invest`}>
                  Invest
                </LinkComponent>
              </FooterLink>
            </div>
          </li>

          <li className={styles.menu}>
            <div className={styles.title}>Company</div>

            <div className={styles.links}>
              <FooterLink white>
                <LinkComponent href={`${origin}/people`}>People</LinkComponent>
              </FooterLink>

              <FooterLink white>
                <LinkComponent href="https://investor.arcanecrypto.se/news/" target="_blank">Investor Relations</LinkComponent>
              </FooterLink>

              <FooterLink white>
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
