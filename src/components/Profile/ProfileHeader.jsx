// eslint-disable-next-line
import React from 'react';
import { Flex, VStack, Text, Avatar, Button, AvatarGroup } from '@chakra-ui/react';

const ProfileHeader = ({ username, avatar, posts, followers, followings }) => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
      <AvatarGroup
        size={{ base: 'xl', sm: '2xl' }}
        justifyContent={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}>
        <Avatar src={avatar} />
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}>
          <Text>{username}</Text>

          <Flex>
            <Button
              bg={'white'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.800' }}
              size={{ base: 'xs', md: 'sm' }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex gap={{ base: 2, sm: 4 }} alignItems={'center'}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {posts}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {followers}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {followings}
            </Text>
            Followings
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            Full Name
          </Text>
        </Flex>

        <Text fontSize={'sm'}>Custom status bla bla bla custom status bla bla bla</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
