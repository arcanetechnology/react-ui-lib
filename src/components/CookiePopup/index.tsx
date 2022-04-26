import { useState } from 'react';
import Toggle from 'react-toggle';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import CookieBite from '../../svg/CookieBite';
import SwitchLock from '../../svg/SwitchLock';
import styles from './index.module.scss';

export interface Props {
  /**
   * Indicates if the popup is open.
   * <CookiePopup /> with isOpen={false} is effectively not rendered.
   */
  isOpen: boolean;
  /**
   * Called when the choice is selected with the boolean response.
   */
  onChoiceSelected: (choice: boolean) => void;
}

/**
 * Represents a cookie popup (UI only).
 */
export default function CookiePopup({ isOpen, onChoiceSelected }: Props) {
  const [productDevCookiesAllowed, setProductDevCookiesAllowed] = useState(true);

  const onSave = () => {
    onChoiceSelected(productDevCookiesAllowed);
  };

  return (
    <Popup isOpen={isOpen}>
      <div className={styles.header}>
        <CookieBite />
        <div className={styles.title}>Cookie Settings</div>
      </div>

      <div className={styles.text}>
        We use cookies in order to give you the best experience possible while visiting our website.
        Some of them are essential, others are optional. <a href="https://arcane.no/cookies" target="_blank" rel="noreferrer">Learn more about them</a>
      </div>

      <div className={styles.settings}>
        <div className={styles.setting}>
          <div className={styles.settingTitle}>
            <div className={styles.settingTitleText}>
              Strictly Necessary
            </div>

            <SwitchLock />
          </div>

          <div className={styles.text}>
            These cookies are necessary for our website to function properly and can’t be disabled.
          </div>
        </div>

        <div className={styles.setting}>
          <div className={styles.settingTitle}>
            <div className={styles.settingTitleText}>
              Product Development
            </div>

            <Toggle
              checked={productDevCookiesAllowed}
              icons={false}
              onChange={(e: any) => setProductDevCookiesAllowed(e.target.checked)}
            />
          </div>

          <div className={styles.text}>
            These cookies help us understand how people use our website and help us make it better.
          </div>
        </div>
      </div>

      <Button small className={styles.saveButton} onClick={onSave} data-testid="save-cookie-settings">Save settings</Button>
    </Popup>
  );
}
