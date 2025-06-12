# Social Media Dashboard

## Overview

This project is a React Native social media dashboard that integrates with provided APIs, features complex animations, advanced state management, and sophisticated data visualization.

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd socialMedia
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Run the app**
   - For iOS:
     ```bash
     npx pod-install ios
     yarn ios
     ```
   - For Android:
     ```bash
     yarn android
     ```

## Architecture Overview

The project is structured as follows:

```
src/
├── components/
│   ├── animated/        # Reanimated components
│   ├── charts/          # Data visualization components
│   ├── forms/           # Form components with validation
│   ├── media/           # Image/video components
│   └── ui/              # Base UI components
├── screens/
│   ├── auth/            # Authentication screens
│   ├── dashboard/       # Main dashboard screens
│   ├── profile/         # User profile screens
│   ├── analytics/       # Analytics and insights
│   └── settings/        # App configuration
├── hooks/
│   ├── useApi.js        # API integration hooks
│   ├── useAnimation.js  # Animation utility hooks
│   ├── useGesture.js    # Gesture handling hooks
│   └── usePerformance.js # Performance monitoring
├── services/
│   ├── api/             # API client and endpoints
│   ├── cache/           # Caching strategies
│   ├── analytics/       # Performance tracking
│   └── notifications/   # Notification handling
├── store/
│   ├── slices/          # Redux state slices
│   ├── middleware/      # Custom middleware
│   ├── selectors/       # Memoized selectors
│   └── transforms/      # Data transformation utilities
└── utils/
    ├── animations/      # Animation configurations
    ├── performance/     # Performance utilities
    ├── validation/      # Validation schemas
    └── constants/       # App constants and configs
```

## API Integration

The app integrates with the following APIs:

- **JSONPlaceholder**: Used for fetching users, posts, comments, albums, and photos.
- **DummyJSON**: Provides additional user data.
- **Reqres**: Simulates authentication processes.

## Features

- **Authentication**: Biometric authentication and multi-step onboarding.
- **Dashboard**: Infinite scroll, pull-to-refresh, and interactive elements.
- **State Management**: Redux Toolkit with RTK Query for API state management.
- **UI/UX**: Advanced animations, custom components, and performance optimization.

## Testing

Ensure the app is tested on both iOS and Android platforms for compatibility and performance.

## Contribution

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License.
