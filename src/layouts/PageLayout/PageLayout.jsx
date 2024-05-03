// eslint-disable-next-line
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Flex>
        {/* sidebar on the left */}
        {pathname !== '/auth' ? (
          <Box w={{ base: '70px', md: '240px' }}>
            <Sidebar />
          </Box>
        ) : null}

        {/* the page content on the right */}
        <Box
          flex={1}
          width={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240)' }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
