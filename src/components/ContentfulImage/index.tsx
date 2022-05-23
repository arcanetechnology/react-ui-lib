import styles from './index.module.scss';

export interface Props {
  /**
   * An image object retrieved from Contentful. It contains asset data like url.
   */
  image: {
    url: string;
    title?: string;
    description?: string
  };
  /**
   * An optional width of the image (`w` query param for Contentful asset).
   * It can be used to optimize the request by requesting smaller image.
   */
  w?: Number;
  /**
   * Indicates if the image should be converted to png if it is svg.
   */
  svgToPng?: boolean;
  /**
   * Set to `false` to prevent displaying the image description next to the image.
   */
  showDescription?: boolean;
};

/**
 * Renders an image fetched from Contentful.
 */
export default function ContentfulImage({ image, w, svgToPng, showDescription = true, ...props }: Props) {
  if (!image) {
    return null;
  }

  const convertToPng = svgToPng && image.url.toLowerCase().endsWith('.svg');

  console.log('image', image);

  const imageUrl = w || convertToPng
    ? `${image.url}?${w ? `w=${w}` : ''}${convertToPng ? '&fm=png' : ''}`
    : image.url

  return (
    image
      ? (
        <>
          <img src={imageUrl} alt={image.title} title={image.description} {...props} />
          {showDescription && (
            <div className={styles.description} data-richtextimagedescription>{image.description}</div>
          )}
        </>
      )
      : null
  );
}
