export const findProfile = (profiles = [], userId, userRegion) =>
        profiles.find(profile => profile.profileId === userId && profile.regionId === userRegion)