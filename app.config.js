module.exports = {
  expo: {
    // Your existing Expo configuration goes here
    android: {
      package: "com.example.samazone" // Placeholder Android package name
    },
    ios: {
      bundleIdentifier: "com.example.samazone" // Placeholder iOS bundle identifier
    },
    extra: {
      eas: {
        projectId: "587d2d62-28cf-4a29-ac74-383d91d84bd3"
      }
    },
    updates: {
      url: "https://u.expo.dev/587d2d62-28cf-4a29-ac74-383d91d84bd3"
    },
    runtimeVersion: {
      policy: "appVersion"
    }
  }
};
