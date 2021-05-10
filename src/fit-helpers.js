export const findProfile = (profiles = [], userId, userRegion) =>
        profiles.find(profile => profile.profileId === userId && profile.regionId === userRegion)

export const findProfileType = (profileTypes= [], userId) =>
        profileTypes.find(profileType => profileType.id === userId)