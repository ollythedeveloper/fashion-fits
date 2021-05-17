export const findProfile = (profiles = [], userId, userRegion) =>
        profiles.find(profile => profile.profiletype_id === userId && profile.region_id === userRegion)

export const findProfileType = (profileTypes= [], userId) =>
        profileTypes.find(profileType => profileType.id === userId)