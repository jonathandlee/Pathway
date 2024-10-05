export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    // accessibilityPreferences: AccessibilityPreferences;
    // contributions: Contribution[];
  }

  export interface AccessibilityPreferences {
    wheelchairAccessible: boolean;
    hearingFacilities: boolean;
    visualAids: boolean;
    [key: string]: boolean; // For additional preferences
  }
  
  export interface Contribution {
    id: string;
    type: 'Review' | 'Post';
    content: string;
    date: string; // ISO date string
    relatedVenue?: Venue; // If applicable
  }
  
  export interface Venue {
    id: string;
    name: string;
    // ... other properties
  }
  
  export interface Post {
    id: string;
    author: User;
    content: string;
    createdAt: string; // ISO date string
  }