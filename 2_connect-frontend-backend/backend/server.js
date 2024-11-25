import express from "express";
const app = express();
app.use(express.static("dist"));
//  allow cors to access this resource from localhost 5173 port
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//   res.send("<h2>Hello from server</h2>");
// });

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "What do you call a fish with no eyes?",
      content: "A fsh.",
    },
    {
      id: 2,
      title: "What do you call a bear with no socks on?",
      content: "Barefoot.",
    },
    {
      id: 3,
      title: "Why was the math book sad?",
      content: "Because it had too many problems.",
    },
    {
      id: 4,
      title: "Why did the tomato turn red?",
      content: "Because it saw the salad dressing.",
    },
    {
      id: 5,
      title: "What do you call a fake noodle?",
      content: "An impasta.",
    },
  ];
  res.json(jokes);
});
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
