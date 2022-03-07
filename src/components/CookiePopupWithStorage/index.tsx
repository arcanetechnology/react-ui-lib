import CookiePopup from '../../components/CookiePopup';
import React, { useEffect, useState } from 'react';

interface GoogleAnalyticsComponentProps {
  /**
   * Indicates if google analytics functionality is allowed.
   */
  allowAnalytics: boolean;
  /**
   * Firebase measurement id.
   */
  firebaseMeasurementId: string;
}

export interface Props {
  /**
   * An implementation of Google Analytics component that adds Google Analytics scripts and grants or denies storage access.
   * The built-in &lt;NextGoogleAnalytics&gt; can be used for Next.js projects.
   */
  GoogleAnalyticsComponent: React.ComponentType<GoogleAnalyticsComponentProps>
  /**
   * Firebase measurement id.
   */
  firebaseMeasurementId: string
}

/**
 * This component renders the <CookiePopup> only when the user has not yet made a choice.
 * Once made, the chouce is remembered in localStorage.cookieChoice and the &lt;GoogleAnalyticsComponent&gt; component is rendered.
 *
 * The &lt;GoogleAnalyticsComponent&gt; component should implement all scripts that include Google Analytics (and potentially any other cookie-related scripts in the future).
 *
 * For next.js implementation, use the &lt;NextGoogleAnalytics&gt;
 */
export default function CookiePopupWithStorage({ GoogleAnalyticsComponent, firebaseMeasurementId }: Props) {
  const [productDevCookieChoice, setProductDevCookieChoice] = useState<undefined | 'YES' | 'NO'>(undefined);

  useEffect(() => {
    const cookieChoice = localStorage.cookieChoice ? JSON.parse(localStorage.cookieChoice) : {};

    if (!cookieChoice.productDevCookie) {
      return;
    }

    setProductDevCookieChoice(cookieChoice.productDevCookie);
  }, []);

  const onChoiceSelected = (productDevCookiesAllowed: boolean) => {
    const yesNoChoice = productDevCookiesAllowed ? 'YES' : 'NO';

    const cookieChoice = localStorage.cookieChoice ? JSON.parse(localStorage.cookieChoice) : {};
    cookieChoice.productDevCookie = yesNoChoice;
    localStorage.cookieChoice = JSON.stringify(cookieChoice);

    setProductDevCookieChoice(yesNoChoice);
  };

  return (
    <>
      <CookiePopup isOpen={productDevCookieChoice === undefined} onChoiceSelected={onChoiceSelected} />
      {productDevCookieChoice && (
        <GoogleAnalyticsComponent
          firebaseMeasurementId={firebaseMeasurementId}
          allowAnalytics={productDevCookieChoice === 'YES'}
        />
      )}
    </>
  );
}
