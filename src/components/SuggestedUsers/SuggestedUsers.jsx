// eslint-disable-next-line
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={'center'} justifyContent={'space-between'} width={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>

        <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.500' }} cursor={'pointer'}>
          See all
        </Text>
      </Flex>

      <SuggestedUser name="User Name 1" followers={123} avatar="/img1.png" />
      <SuggestedUser name="User Name 2" followers={456} avatar="/img2.png" />
      <SuggestedUser name="User Name 3" followers={789} avatar="/img3.png" />

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        C 2024 Built By Me{')))'}
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
