import { NavLink } from 'react-router-dom';
import './NavbarItem.scss';
import { FC } from 'react';

interface NavbarItemProps {
  to: string;
  content: React.ReactNode;
  type: 'a' | 'NavLink';
}

export const NavbarItem: FC<NavbarItemProps> = ({ to, content, type }) => {
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
