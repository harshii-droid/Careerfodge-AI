# CareerFodge AI Backend

## Install

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/careerfodge
JWT_SECRET=careerfodge_secret_key
```

Run the server:

```bash
npm run dev
```

---

## API Endpoints

### Authentication

POST /api/auth/register

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

POST /api/auth/login

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

### Assessment

POST /api/assessment

```json
{
  "interests": [
    "Programming",
    "Artificial Intelligence"
  ],
  "strengths": [
    "Problem Solving"
  ],
  "skills": [
    "Java"
  ]
}
```

GET /api/assessment

---

### AI

POST /api/ai/analyze

GET /api/ai/recommendations

GET /api/ai/learning-plan