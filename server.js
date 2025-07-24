const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static("."));

// API endpoint to get client IP
app.get("/api/ip", (req, res) => {
	const clientIP =
		req.headers["x-forwarded-for"] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		(req.connection.socket ? req.connection.socket.remoteAddress : null);

	res.json({
		ip: clientIP === "::1" ? "127.0.0.1" : clientIP,
		timestamp: new Date().toISOString(),
	});
});

// Route for the main attendance system
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Route for the dashboard
app.get("/dashboard", (req, res) => {
	res.sendFile(path.join(__dirname, "attendance-dashboard.html"));
});

app.listen(PORT, () => {
	console.log(`🚀 Smart Attendance System running at:`);
	console.log(`📱 Main System: http://localhost:${PORT}`);
	console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
	console.log(`🌐 IP API: http://localhost:${PORT}/api/ip`);
	console.log(`\n📋 Instructions:`);
	console.log(`1. Open the main system URL in your browser`);
	console.log(`2. Allow camera and location permissions`);
	console.log(`3. Register your face first, then mark attendance`);
	console.log(`4. View results in the dashboard`);
});
