import { ReactNode } from 'react';
import { Header } from './header';

type LayoutProps = {
   children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
   return (
      <body>
         <Header />
         {children}
      </body>
   );
}
