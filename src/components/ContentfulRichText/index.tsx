import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import cn from 'classnames';
import styles from './index.module.scss';

const renderOptions = (links: any) => {
  const assetMap = new Map();

  if (links) {
    // eslint-disable-next-line no-restricted-syntax
    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assetMap.get(node.data.target.sys.id);

        if (asset.contentType.indexOf('video') !== -1) {
          return (
            <div data-richimage className={styles.image}>
              <video
                controls
                width="100%"
                title={asset.title}
              >
                <source src={asset.url} type={asset.contentType} />
              </video>
              <div className={styles.description}>{asset.description}</div>
            </div>
          )
        }

        if (asset.contentType.indexOf('pdf') !== -1 && asset.title) {
          return (
            <p>
              <a href={asset.url} target="_blank" rel="noreferrer">{asset.title}</a>
            </p>
          )
        }

        return (
          <div data-richimage className={styles.image}>
            <img src={asset.url} alt="" />
            <div className={styles.description}>{asset.description}</div>
          </div>
        );
      },
    },
    renderText: (text: any) => (
      text.split('\n').flatMap((text: any, i: number) => (
        [i > 0 && <br key={`br${i}`} />, text]
      ))
    )
  };
};

export interface Props {
  /**
   * The text object retrieved from Contentful. It contains Contentful-specific json representing the rich text that this component parses.
   */
  text: {
    json: any;
    links: any;
  };
  /**
   * A custom className for this component to further customize the rich text appearence.
   */
  className?: string;
}

/**
 * Parses a rich text from Contentful
 */
export default function ContentfulRichText({ text, className }: Props) {
  return (
    <div
      className={cn(styles.richText, { [className as string]: !!className })}
    >
      {documentToReactComponents(text.json, renderOptions(text.links))}
    </div>
  );
}
