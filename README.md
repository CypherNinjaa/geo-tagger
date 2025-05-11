---
Project: "GeoTagger"
Author: "Priyangsu"
Published: "11 May 2025"
---

## GeoTagger

**GeoTagger** is a browser-based camera tool that captures photos directly from a device's camera and embeds real-time metadata—including GPS coordinates and IP address—onto the image. It is designed for field documentation, digital forensics, and geolocation-based reporting without needing native apps or installations.

### Features

- 📷 Captures photos directly using the device camera.
- 🌍 Embeds **latitude**, **longitude**, and **public IP address** on the image.
- 🧠 Works entirely in-browser with no server dependency.
- 🧾 Allows instant download of the location-stamped image.
- 🔒 No data is sent to any backend or stored—privacy first.

### How It Works

When the user clicks “Capture Photo,” the app:

1. Accesses the live camera stream using `getUserMedia()`.
2. Captures a frame and draws it on a `<canvas>`.
3. Retrieves the user’s current geolocation and IP address.
4. Overlays the location and IP text onto the image.
5. Allows the image to be downloaded as a PNG.

### Metadata Embedded on Photo

Example of information printed on the captured image:
Lat: 22.5726, Lon: 88.3639
IP: 103.24.XXX.XXX

### Fair Usage Policy

This project is intended for **ethical**, **transparent**, and **privacy-respecting** use cases such as:

- Field survey & inspection
- Journalism & citizen reporting
- Pet rescue / event verification
- Location-based audits

**You must not:**

- Use this tool for covert surveillance or unauthorized tracking
- Store or distribute captured data without user consent
- Violate any applicable data protection laws (e.g., GDPR, CCPA)

### Live Demo

Try the tool live at:  
[View Live](https://priyangsubanerjee.github.io/geotagger/)

### Author

Built with ❤️ by **[@priyangsubanerjee](https://github.com/priyangsubanerjee)**.  
This project is open-source and welcomes contributions, suggestions, and issue reports.

For improvements or to report bugs, feel free to open a pull request or raise an issue on GitHub.
