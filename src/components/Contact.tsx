import { Item } from '@/interfaces/Contact';
import Icon from './Icon';

type ContactProps = {
  item: Item;
};

const Contact = ({ item }: ContactProps) => {
  return (
    <li className="mx-5">
      <a
        href={item.href}
        className="flex items-center justify-center text-gray-500/70 transition-all duration-500 hover:-translate-y-1 hover:text-primary"
        aria-label={item.name}
      >
        <Icon name={item.name} />
      </a>
    </li>
  );
};

export default Contact;
