import React from 'react'
import { UserProfile } from './UserProfile'
import { Card, CardContent, CardMedia, Divider, Paper, Stack, Typography } from '@mui/material'
import { ProfileType } from '../types/ProfileType'
import styles from './UserCardStyle.module.css'

export const UserCard = () => {
  const userData: ProfileType = {
    name: `Julia Keyne`,
    avatar: `./avatar.jpg`,
    domain: `Product Design Developer`,
    biography: `Product Design Developer experienced in applying Design Thinking and 
    Agile methodologies to create innovative, 
    user-centered products that meet both user needs and business objectives.`
  }
  return (

    <UserProfile userData={userData}
      render={(userProfileData: ProfileType) => (
        <Stack spacing={4} direction={'row'} className={styles.userCardStack}>
          <Card className={styles.cardWrapper} component={Paper}>
            <CardMedia
              component={'img'}
              image='./aesthetic-scenery.jpg'
              className={styles.cardMedia}
            ></CardMedia>
            <CardMedia
              component={'img'}
              image={userProfileData.avatar}
              className={styles.cardMediaAvatar}
            ></CardMedia>
            <CardContent className={styles.cardContent}>
              <Typography variant='h4' component='div' >{userProfileData.name}</Typography>
              <Typography variant='h6' component='div' >{userProfileData.domain}</Typography>
              <Divider className={styles.cardSeperator}></Divider>
              <Typography variant='body2' component='div' >{userProfileData.biography}</Typography>
            </CardContent>
          </Card>
        </Stack>
      )} />
  )
}