# Smart Attendance System

An intelligent attendance system that combines facial recognition with GPS location verification for secure and accurate attendance tracking.

## Features

🎯 **Face Recognition**: Uses AI-powered facial recognition to identify users
📍 **Location Verification**: GPS-based location matching for attendance validation  
💾 **Local Storage**: All data stored locally for testing purposes
📊 **Dashboard**: View attendance history and statistics
🔒 **Security**: Dual verification (face + location) for enhanced security

## How to Use

### Initial Setup

1. Open `index.html` in your web browser
2. Allow camera and location permissions when prompted
3. Wait for AI models to load (first time may take a few moments)

### Registration (First Time)

1. Click "Register Face" button
2. Position your face clearly in the camera view
3. The system will detect your face and capture your location
4. Registration complete! Your face and location are now stored

### Marking Attendance

1. After registration, the button changes to "Mark Attendance"
2. Position your face in the camera view
3. The system will:
   - Detect and match your face with registered data
   - Verify your current location against registered location
   - Mark attendance as successful only if both face and location match

### Viewing Results

- **Green status**: Attendance marked successfully
- **Red status**: Attendance failed (face mismatch or wrong location)
- Use "Download Photo" to save the captured image with verification info

### Dashboard

- Open `attendance-dashboard.html` to view:
  - Registration status
  - Attendance statistics
  - Complete attendance history
  - Export/clear data options

## Configuration

You can adjust these parameters in the code:

```javascript
const FACE_MATCH_THRESHOLD = 0.6; // Lower = stricter face matching
const LOCATION_MATCH_THRESHOLD = 100; // Maximum distance in meters
```

## Data Storage

For testing purposes, all data is stored in browser's localStorage:

- `attendanceRegistration`: User's face descriptor and location
- `attendanceHistory`: Array of all attendance attempts

## Technical Details

### Face Recognition

- Uses face-api.js library with SSD MobileNet v1 for face detection
- 68-point facial landmark detection for alignment
- 128-dimensional face descriptors for recognition
- Euclidean distance calculation for face matching

### Location Verification

- GPS coordinates with high accuracy mode
- Haversine formula for distance calculation
- Configurable distance threshold for location matching

### Security Features

- Dual verification (face + location) prevents spoofing
- Face descriptor encryption prevents reconstruction
- Location accuracy validation
- Timestamp verification

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari (iOS may need additional permissions)
- ⚠️ Requires HTTPS for camera access (except localhost)

## Files Structure

```
geo-tagger/
├── index.html              # Main attendance system
├── attendance-dashboard.html # Statistics dashboard
├── face-api.min.js         # Face recognition library
├── weights/                # AI model files
│   ├── ssd_mobilenetv1_model-*
│   ├── face_landmark_68_model-*
│   └── face_recognition_model-*
└── README.md              # This file
```

## Development Notes

This is a testing/demonstration system. For production use:

- Implement server-side storage
- Add user authentication
- Encrypt face descriptors
- Add audit logging
- Implement backup/sync features
- Add administrative controls

## Troubleshooting

**Models not loading**: Ensure weights folder is present and accessible
**Camera not working**: Check browser permissions and HTTPS requirement
**Face not detected**: Ensure good lighting and face is clearly visible
**Location errors**: Enable location services and check GPS signal
**Storage full**: Use "Reset Data" button to clear localStorage

## Credits

- Face recognition: [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- UI Framework: [Tailwind CSS](https://tailwindcss.com)
- Icons: Unicode emoji characters
