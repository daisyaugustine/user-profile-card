import React from 'react'
import { ProfileType } from '../types/ProfileType'

type UserProfileProps = {
    userData: ProfileType,
    render(props: ProfileType): React.ReactNode
}

export const UserProfile = ({ userData, render }: UserProfileProps) => {
    const userProfileData = userData
    return (
        <div>
            {
                render(userProfileData)
            }
        </div>
    )
}
