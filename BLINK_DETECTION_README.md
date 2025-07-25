# Eye Blink Detection (Liveness Checker) Implementation

## Overview

This implementation adds eye blink detection to your attendance system as a liveness check to prevent spoofing attacks using photos or videos. The system uses the Eye Aspect Ratio (EAR) algorithm combined with face-api.js facial landmarks.

## How It Works

### 1. Eye Aspect Ratio (EAR) Calculation

The EAR algorithm calculates the ratio between eye height and width:

```
EAR = (|p2-p6| + |p3-p5|) / (2 * |p1-p4|)
```

Where:

- `p1, p4` = horizontal eye corners
- `p2, p3` = top eye points
- `p5, p6` = bottom eye points

### 2. Face-api.js Eye Landmarks

Face-api.js provides 68 facial landmarks, including:

- **Left Eye**: Points 36-41 (6 points)
- **Right Eye**: Points 42-47 (6 points)

### 3. Blink Detection Logic

```javascript
// EAR threshold - below this value indicates closed eyes
const EAR_THRESHOLD = 0.25;

// Number of consecutive frames needed to register a blink
const CONSECUTIVE_FRAMES = 3;

// Number of blinks required for liveness verification
const REQUIRED_BLINKS = 2;
```

## Key Features Added

### 1. Real-time Blink Monitoring

- Continuously monitors eye landmarks during capture
- Calculates EAR for both eyes every 100ms
- Detects when EAR drops below threshold

### 2. Liveness Verification Flow

1. User clicks "Mark Attendance" or "Register Face"
2. System detects face and starts liveness check
3. User is prompted to blink 2 times slowly
4. System monitors blinks for 15 seconds
5. If successful, proceeds with attendance/registration
6. If failed, user must retry

### 3. Enhanced Security

- Prevents photo spoofing attacks
- Prevents video replay attacks
- Requires real human interaction

## Code Implementation

### Main Functions Added

```javascript
// Calculate Eye Aspect Ratio
function calculateEAR(eyeLandmarks) {
	const verticalDist1 = Math.sqrt(/* top-bottom distance 1 */);
	const verticalDist2 = Math.sqrt(/* top-bottom distance 2 */);
	const horizontalDist = Math.sqrt(/* left-right distance */);
	return (verticalDist1 + verticalDist2) / (2.0 * horizontalDist);
}

// Detect blinks based on EAR
function detectBlink(landmarks) {
	const leftEye = landmarks.getLeftEye();
	const rightEye = landmarks.getRightEye();
	const leftEAR = calculateEAR(leftEye);
	const rightEAR = calculateEAR(rightEye);
	const avgEAR = (leftEAR + rightEAR) / 2.0;

	// Blink detection logic...
}

// Monitor blinks continuously
async function monitorBlinks(faceDescriptor) {
	// Continuous monitoring during liveness check
}
```

### Updated Workflow

1. **Face Detection**: Detect face and landmarks
2. **Liveness Check**: Monitor blinks for verification
3. **Location Verification**: Get GPS coordinates
4. **Face Matching**: Compare with registered face
5. **Attendance Recording**: Save with liveness status

## Configuration Parameters

```javascript
const EAR_THRESHOLD = 0.25; // Eye closure threshold
const CONSECUTIVE_FRAMES = 3; // Frames needed for blink
const REQUIRED_BLINKS = 2; // Blinks needed for liveness
```

### Adjusting Sensitivity

- **Lower EAR_THRESHOLD (0.20)**: More sensitive, detects partial blinks
- **Higher EAR_THRESHOLD (0.30)**: Less sensitive, requires full blinks
- **More CONSECUTIVE_FRAMES**: Reduces false positives
- **More REQUIRED_BLINKS**: Increases security but user friction

## Files Modified

1. **index.html**: Main attendance system with liveness check
2. **blink-detector-demo.html**: Standalone demo for testing

## Testing the Implementation

### 1. Demo File

Open `blink-detector-demo.html` to:

- See real-time EAR values
- Test blink detection
- Adjust threshold parameters
- Visualize eye landmarks

### 2. Main System

The enhanced attendance system now:

- Requires blinks before processing
- Shows liveness status in UI
- Records liveness verification in data

## Security Benefits

1. **Anti-Spoofing**: Prevents photo attacks
2. **Live Presence**: Confirms user is present
3. **Natural Interaction**: Uses normal human behavior
4. **Reliable Detection**: Based on proven EAR algorithm

## Potential Improvements

1. **Head Movement**: Add head pose detection
2. **Smile Detection**: Require facial expression changes
3. **Eye Gaze**: Track eye movement patterns
4. **Voice Verification**: Add audio challenges
5. **Multiple Modalities**: Combine different liveness checks

## Troubleshooting

### Common Issues

1. **False Positives**: Adjust EAR_THRESHOLD or CONSECUTIVE_FRAMES
2. **Poor Lighting**: Ensure good illumination for landmark detection
3. **Camera Quality**: Use HD camera for better accuracy
4. **Glasses**: May affect landmark detection accuracy

### Browser Support

- Chrome: Full support
- Firefox: Full support
- Safari: iOS requires HTTPS
- Edge: Full support

## Performance Considerations

- **Processing Frequency**: 100ms intervals (10 FPS)
- **Model Loading**: ~2-3MB additional models
- **CPU Usage**: Moderate increase during monitoring
- **Memory**: ~50MB additional for landmarks

This implementation significantly enhances the security of your attendance system while maintaining user-friendly operation.
