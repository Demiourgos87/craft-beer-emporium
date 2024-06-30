import { ReactNode } from 'react';

// components
import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
