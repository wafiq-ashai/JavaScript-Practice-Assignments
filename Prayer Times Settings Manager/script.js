let setupDashboardSettings = function(userSettings, defaultSettings) {
    let locationResult = extractLocationSettings(userSettings.location, defaultSettings.location)
    let notificationResult = processNotificationPreferences(userSettings.notifications, defaultSettings.notifications)
    let displayResult = {...defaultSettings.display, ...userSettings.display}

    return {
        location: locationResult,
        notifications: notificationResult,
        display: displayResult
    }

}

let extractLocationSettings = function(userLocation, defaultLocation) {
    let {city, country, coordinates} = userLocation
    let {city: defaultCity, country: defaultCountry, coordinates: defaultCoordinates} = defaultLocation
    
    let finalCity = city || defaultCity
    let finalCountry = country || defaultCountry
    let finalCoordinates = coordinates || defaultCoordinates

    return {
        city: finalCity,
        country: finalCountry,
        coordinates: finalCoordinates
    }

}

let processNotificationPreferences = function(userNotifSettings, defaultNotifSettings) {
    return {
        ...defaultNotifSettings,
        ...userNotifSettings
    }                                                                       
}

let createUserProfile = function (userData, preferences) {
    return {
        user: userData,
        preferences: preferences
       }
}