import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, NavList } from './AppLayout.styled';

const AppLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppLayout;
