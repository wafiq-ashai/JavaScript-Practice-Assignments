const systemDefaults = {
    location: {
        city: 'Makkah',
        country: 'Saudi Arabia',
        coordinates: {
            lat: 21.4225,
            long: 39.8262
        }
    },
    notifications: {
        adhan: true,
        fajr: true,
        sunrise: false,
        isha: true,
        type: 'audio',
        volume: 50
    },
    display: {
        timeFormat: '24h',
        language: 'Arabic',
        theme: 'light'
    }
};

const userSettings = {
    location: {
        city: 'Dubai',
        country: 'UAE'
    },
    notifications: {
        adhan: true,
        fajr: true,
        type: 'vibrate'
    },
    display: {
        language: 'English'
    }
};

const userData = {
    id: 1,
    name: "Wafiq",
    email: "wafiqashai279@gmail.com"
};

const settings = setupDashboardSettings(userSettings, systemDefaults)

console.log("Settings: ", settings);

let userProfile = createUserProfile(userData, settings)

console.log("User Profile: ", userProfile);
