import { Section, Child, SectionTitle } from './Section';
import ContentfulImage from '../ContentfulImage';
import styles from './index.module.scss';
import ContentfulRichText from '../ContentfulRichText';

export interface Props {
  /**
   * Feature list content.
   */
  content: {
    itemsCollection: Array<Item>
  };
  /**
   * A function rendering the given button
   */
  renderButton?: (button: any) => React.ReactNode;
  /**
   * Prevents the scroll-out animation.
   */
  noScrollAnimation?: boolean;
  /**
   * An additional class name for the section.
   */
  className?: string;
};

interface Item {
  title: string;
  image: {
    url: string
  };
  text?: {
    json: any;
    links: any;
  };
  content?: React.ReactNode;
  button?: any;
}

/**
 * Represents list of items called features.
 *
 * Each item contains an image on one side and content on the other. The content can contain title, text, and a button.
 * The text of each item can come from contentful (via the text prop) or be a simple JSX (via the content prop).
 *
 * The button can be of any type or value. If provided, the renderButton function should also be provided to render the button.
 */
export default function FeatureList({ content, renderButton, noScrollAnimation, className }: Props) {
  const renderImage = (item: Item) => (
    <Child marketingImage>
      <ContentfulImage image={item.image} w={600} showDescription={false} />
    </Child>
  );

  const renderText = (item: Item) => (
    <Child>
      {item.title && (
        <SectionTitle>{item.title}</SectionTitle>
      )}

      {item.text && (
        <ContentfulRichText text={item.text} className={styles.richText} />
      )}

      {item.content && (
        <div className={`${styles.richText} ${styles.content}`}>
          {item.content}
        </div>
      )}

      {item.button && renderButton && (
        renderButton(item.button)
      )}
    </Child>
  );

  return (
    <>
      {content.itemsCollection.map((item, index) => (
        <Section
          columnReverse={index % 2 === 0}
          key={item.title || index}
          className={className}
          data-testid="FeatureList"
          noScrollAnimation={noScrollAnimation}
        >
          {index % 2 === 0
            ? (
              <>
                {renderImage(item)}
                {renderText(item)}
              </>
            ) : (
              <>
                {renderText(item)}
                {renderImage(item)}
              </>
            )
          }
        </Section>
      ))}
    </>
  );
}
