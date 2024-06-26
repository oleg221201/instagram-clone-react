// eslint-disable-next-line
import React, { useState } from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({ username, isProfilePage = false }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(1000);

  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <Box mb={10} mt={'auto'}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikeClick} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likesCount} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={'sm'}>
            {username}{' '}
            <Text as={'span'} fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize="sm" color={'gray'}>
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'}>
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}></Input>
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}>
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
