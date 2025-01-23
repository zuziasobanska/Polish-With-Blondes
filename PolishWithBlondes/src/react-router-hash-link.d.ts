declare module 'react-router-hash-link' {
  import { NavLinkProps } from 'react-router-dom';
  import React from 'react';

  export interface HashLinkProps extends NavLinkProps {
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
  export const NavHashLink: React.FC<HashLinkProps>;

  export default HashLink;
}
