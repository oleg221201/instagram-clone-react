// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const skeletonLoadingPage = () =>
    [0, 1, 2, 3, 4, 5].map((_, index) => (
      <VStack key={index} gap={4} alignItems={'flex-start'}>
        <Skeleton w={'full'}>
          <Box h={'300px'}>contents wrapped</Box>
        </Skeleton>
      </VStack>
    ));

  const pageContent = () => (
    <>
      <ProfilePost img="/img1.png" />
      <ProfilePost img="/img2.png" />
      <ProfilePost img="/img3.png" />
      <ProfilePost img="/img4.png" />
    </>
  );

  return (
    <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={1} columnGap={1}>
      {isLoading ? skeletonLoadingPage() : pageContent()}
    </Grid>
  );
};

export default ProfilePosts;
