// eslint-disable-next-line
import React from 'react';
import { Avatar, Text, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} align={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="Username avatar" size={'lg'} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={'bold'}>
          username
        </Text>
      </Flex>

      <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.500'}
        cursor={'pointer'}
        style={{ textDecoration: 'none' }}>
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
