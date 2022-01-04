import useLinkComponent from '../../../hooks/useLinkComponent';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Analytics from '../../../svg/Analytics';
import Exchange from '../../../svg/Exchange';
import Search from '../../../svg/Search';
import styles from './index.module.scss';
import cn from 'classnames';

const MENU_ITEMS = [
  {
    url: 'research',
    icon: <Search />,
    label: 'Research'
  },
  {
    url: 'trade',
    icon: <Exchange />,
    label: 'Trade'
  },
  {
    url: 'invest',
    icon: <Analytics />,
    label: 'Invest'
  }
];

interface Props {
  origin: string;
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
}

export default function Menu({ origin, isOpen, onClose, activeItem }: Props) {
  const LinkComponent = useLinkComponent();

  const componentRef = useOutsideClick({
    isDisplayed: isOpen,
    onOutsideClick: onClose
  }) as any;

  return (
    <ul className={cn(styles.appList, { [styles.open]: isOpen })} ref={componentRef} data-testid="menu">
      {MENU_ITEMS.map((item) => (
        <li key={item.url} className={cn({ [styles.active]: item.label === activeItem })}>
          <LinkComponent href={`${origin}/${item.url}`}>
            {item.icon}
            <div>{item.label}</div>
          </LinkComponent>
        </li>
      ))}
    </ul>
  );
}
