const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error("--- Error Log ---");
  console.error("Time:", new Date().toISOString());
  console.error("Method:", req.method);
  console.error("Path:", req.originalUrl);
  console.error("Status:", statusCode);
  console.error("Message:", message);
  if (err.stack) {
    console.error("Stack:", err.stack);
  }
  console.error("-----------------");

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorMiddleware;
