📅 Timetable & Calendar Management Website

This is a React-based timetable management web application that allows users to create, view, and manage schedules in both list view and calendar view. The application also includes a real-time countdown timer for upcoming events to help users stay organized and punctual.

🚀 Features

Add, edit, and delete timetable events

View schedules in list format

View events in a calendar interface

Real-time countdown timer for upcoming events

Responsive and user-friendly UI

Local storage support (no backend required)

🛠️ Tech Stack

React – Frontend framework

Vite – Fast development & build tool

Tailwind CSS – Styling

date-fns – Date & time calculations

JavaScript (ES6) – Logic

📦 Project Setup
1️⃣ Clone the repository
git clone <repository-url>
cd timetable-calendar-app

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


The application will run at:

http://localhost:5173

📂 Project Structure
src/
│── components/
│   ├── TimetableList.jsx
│   ├── CalendarView.jsx
│   ├── Timer.jsx
│   ├── AddEvent.jsx
│   └── Navbar.jsx
│
│── contexts/
│   └── TimetableContext.jsx
│
│── utils/
│   └── dateHelpers.js
│
│── App.jsx
│── main.jsx

⏰ Timer Functionality

The timer is implemented using JavaScript’s setInterval() and React hooks.
The date-fns library is used to calculate time differences and display countdowns for upcoming events.

🔮 Future Enhancements

User authentication

Cloud database integration

Event notifications

Pomodoro timer for focused study sessions

Export timetable as PDF

🧑‍🏫 Notes

This is a frontend-only project. All timetable data is stored using browser localStorage. Backend integration can be added in the future.

📄 License

This project is for educational purposes.
