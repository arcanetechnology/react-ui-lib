import Script from 'next/script';

export interface Props {
  /**
   * Indicates if google analytics functionality is allowed.
   */
  allowAnalytics: boolean;
  /**
   * Firebase measurement id.
   */
  firebaseMeasurementId: string;
}

/**
 * Next.js-specific component that adds Google Analytics scripts and grants or denies storage access.
 */
export default function NextGoogleAnalytics({ allowAnalytics, firebaseMeasurementId }: Props) {
  // No Need to gtag('consent', 'update') since the scripts are not rendered unless the user gives a YES/NO answer.
  //
  // useEffect(() => {
  //   if (allowAnalytics) {
  //     window[`ga-disable-${firebaseMeasurementId}`] = false;

  //     /* @ts-ignore */
  //     window.gtag('consent', 'update', {
  //       analytics_storage: 'granted'
  //     });
  //   }
  // }, [allowAnalytics]);

  return (
    <>
      <Script strategy="afterInteractive" id="ga-disable-script">
        {`
          window['ga-disable-${firebaseMeasurementId}'] = ${!allowAnalytics};
        `}
      </Script>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SBY3V7YVL3" strategy="afterInteractive" id="googletagmanager-source" />

      <Script strategy="afterInteractive" id="dataLayer-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag( 'js', new Date () ) ;

          gtag( 'config', 'SBY3V7YVL3');
        `}
      </Script>

      {allowAnalytics ? (
        <Script strategy="afterInteractive" id="gtag-config-script-granted">
          {`
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'granted'
            });

            gtag('config', 'G-SBY3V7YVL3', { 'allow_google_signals': false }, {'allow_ad_personalization_signals': false });
          `}
        </Script>
      ) : (
        <Script strategy="afterInteractive" id="gtag-config-script-denied">
          {`
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            gtag('config', 'G-SBY3V7YVL3', { 'allow_google_signals': false }, {'allow_ad_personalization_signals': false });
          `}
        </Script>
      )}

    </>
  );
}
