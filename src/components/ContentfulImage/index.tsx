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
   * Set to `false` to prevent displaying the image description next to the image.
   */
  showDescription?: boolean;
};

/**
 * Renders an image fetched from Contentful.
 */
export default function ContentfulImage({ image, w, showDescription = true, ...props }: Props) {
  return (
    image
      ? (
        <>
          <img src={`${image.url}${w ? `?w=${w}` : ''}`} alt={image.title} title={image.description} {...props} />
          {showDescription && (
            <div className={styles.description} data-richtextimagedescription>{image.description}</div>
          )}
        </>
      )
      : null
  );
}
