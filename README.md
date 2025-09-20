Typing Speed in JS

A simple web app to measure typing speed, implemented in JavaScript, HTML, and CSS.

Table of Contents

Demo / Screenshot

Features

How It Works

Getting Started

Prerequisites

Installation

Usage

Project Structure

Contributing

License

Acknowledgements

Demo / Screenshot

(Optional: insert a screenshot or link to a live demo if available)

Features

Measures user’s typing speed (words per minute or characters per minute)

Real-time feedback while typing

Simple, clean UI

Client-side only (no server required)

Easily modifiable (text, timer, styling etc.)

How It Works

Presents the user with a predetermined text to type.

Tracks time from when typing starts until finish or timeout.

Calculates typing speed (e.g. WPM) based on the number of correct words/characters and elapsed time.

Displays results (speed, accuracy if implemented).

Getting Started
Prerequisites

You’ll need:

A modern web browser (Chrome, Firefox, Edge, Safari, etc.)

Basic knowledge of HTML / JavaScript if you want to modify it

Installation

Clone the repository:

git clone https://github.com/ckhamitkar/typing-speed.git


Navigate into the project directory:

cd typing-speed


(Optional) If you want a local server for better testing (for example to avoid CORS or local file issues), you can use something like:

# with Python 3
python3 -m http.server


Or any simple static server.

Usage

Open index.html in your browser.

Start typing in the provided text area when prompted.

Your typing speed is calculated after you finish or reach the timer limit.

Review the results.

Project Structure

Here’s a high-level view of how the files are organized:

typing-speed/
├── index.html          ← main HTML page
├── style.css           ← CSS for styling
└── script.js           ← JavaScript logic for typing test, timing, calculation

Contributing

I welcome contributions! Here are some ways you can help:

Report issues or suggest features via GitHub Issues

Fork the project and submit pull requests

Improve or add tests

Add more features (e.g. accuracy calculation, support for custom text, themes, etc.)

Improve UI/UX

License

This project is open source. (You may want to specify a particular license, e.g. MIT, Apache 2.0, etc.)

Acknowledgements

Thanks to all open source developers for inspiration

Any tutorials or references that helped you build this
