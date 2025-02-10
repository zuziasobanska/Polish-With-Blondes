import { NavLink } from 'react-router-dom';
import './NavbarItem.scss';

interface NavbarItemProps {
  to: string; 
  content: React.ReactNode;
  type: 'a' | 'NavLink';
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  to,
  content,
  type,
}) => {
  return (
    <li>
      {type === 'a' ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <NavLink to={to}>{content}</NavLink>
      )}
    </li>
  );
};
