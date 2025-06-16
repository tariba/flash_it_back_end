# Flash It Backend

**Flash It** is a backend API for a flashcard-style quiz app designed to help users prepare for interviews by practising behavioural and technical questions.


This is the backend server for the Flash It application:  
[https://flash-it-back-end.onrender.com/questions](https://flash-it-back-end.onrender.com/questions)

> ⚠️ **Note:** Because this API is hosted on Render’s free tier, the first request after inactivity may take up to **50 seconds** to respond while the server “wakes up.”

---

## 🚀 Live API

- **Base URL:** `https://flash-it-back-end.onrender.com`
- **Main Endpoint:** `/questions`

---


## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **PostgreSQL** via `pg`
- **Testing:** Jest, Supertest

---

## 📦 Dependencies

- `dotenv` – environment variable management  
- `express` – backend framework  
- `pg` – PostgreSQL client  
- `cors` – enables CORS  
- `morgan` – HTTP logger  
- `nodemon` – auto-restarting server for development

---

## 🧪 Dev Dependencies

- `jest` – testing framework  
- `supertest` – HTTP assertions for testing

---

## 🔌 Installation

```bash
git clone https://github.com/tariba/flash_it_back_end.git 
cd flash-it-backend
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```env
PORT=3000
DATABASE_URL=your_database_connection_string
```

---

## ▶️ Usage

To start the development server:

```bash
npm run dev
```

To run tests:

```bash
npm test
```

---

## 📡 API Endpoint

### GET `/questions/`

Retrieves all flashcard-style questions with answers.

| Method | Endpoint     | Request Body | Response Body                     | Status  |
|--------|--------------|--------------|----------------------------------|---------|
| GET    | /questions/  | None         | JSON object with question and answers array | 200 OK  |

#### ✅ Example Response

```json
{
  "success": true,
  "payload": [
    {
      "id": 1,
      "question": "Tell me about yourself?",
      "answer": "This is something you'll be asked a lot at the beginning of an interview. Here are three tips that'll help you nail the opener. Be succinct, honest and engaging. I call this the “SHE” formula. Resist the urge to give a detailed account of the last two decades of your career. The interviewer is looking for an answer that shows them you're qualified and can respond to an unstructured question. Use the job description to prepare. Reread what they want and highlight the most required skills that you have. Are they looking for someone who can solve problems or deal with tough customers? Pick a few and brainstorm how you can describe yourself while showcasing your strengths for what they’re seeking. Tie your story to their needs. People love a good tale, so weave in some personality. For example, maybe you fell in love with the hospitality industry because your grandparents ran a bed and breakfast. Connect your story back to the job, keep it short, and be truthful.",
      "question_id": 1,
      "subject": "Behavioural"
    }
  ]
}
```

---

## 📂 Folder Structure


```bash
flash-it-backend/
├── db/                # Database setup: includes SQL functions to create tables and load mock data from questions.json
├── functions/         # Core backend logic and utilities
├── routes/            # API endpoint definitions
├── App.js             # Main application entry point
├── .env               # Environment variables (excluded from repo)
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Locked dependency versions for consistent installs
├── README.md          # Project documentation
```
---


## 📄 License

This project is open source and available under the [MIT License](LICENSE).
