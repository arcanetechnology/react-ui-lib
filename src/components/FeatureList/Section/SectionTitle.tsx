import styles from './SectionTitle.module.scss';

interface Props {
  /**
   * Title.
   */
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className={styles.sectionTitle}>{children}</h2>
  );
}
