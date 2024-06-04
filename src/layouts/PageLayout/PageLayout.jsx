// eslint-disable-next-line
import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Navbar from '../../components/Navbar/Navbar';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loading && pathname !== '/auth';

  const isAuthCheckInProgress = !user && loading;
  if (isAuthCheckInProgress) return <PageLayoutSpinner />;

  return (
    <>
      <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
        {/* sidebar on the left */}
        {canRenderSidebar ? (
          <Box w={{ base: '70px', md: '240px' }}>
            <Sidebar />
          </Box>
        ) : null}

        {/* navbar */}
        {canRenderNavbar ? <Navbar /> : null}

        {/* the page content on the right */}
        <Box flex={1} width={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240)' }} mx={'auto'}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={'column'} h={'100vj=h'} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'x1'} />
    </Flex>
  );
};

export default PageLayout;
