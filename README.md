# 🎓 Placement Portal

A **full-stack, role-based placement management system** designed to handle real college placement workflows — not a CRUD demo.

This project focuses on **correct eligibility enforcement, resume-per-job applications, ATS integration, and audit-safe status tracking**, built with production-grade architecture.

---

## 📌 Problem Statement

Traditional college placement systems often:

* Show jobs to **ineligible students**
* Allow **multiple applications per job**
* Lack **status transparency**
* Mix frontend and backend responsibilities incorrectly

**Placement Portal** solves this by enforcing **business rules at the backend**, providing a **clean role-based UI**, and integrating **automated ATS scoring**.

---

## 🧠 Core Principles

* Backend is the **single source of truth**
* No frontend role guessing
* Eligibility is enforced **before data is returned**
* Resume is uploaded **per application**
* Status history is **audit-ready**
* Clean, interview-explainable architecture

---

## 🏗️ System Architecture

```
Frontend (React + Clerk)
        ↓ JWT
Backend (Express + Prisma)
        ↓
PostgreSQL Database
        ↓
Python ATS Engine
```

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express
* PostgreSQL
* Prisma ORM
* Clerk (JWT Authentication)
* Python (ATS scoring)
* Zod / Joi (validation)

### Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Clerk (React SDK)
* Axios
* TanStack Query
* React Hook Form
* Zod

---

## 👥 Roles & Capabilities

### 🎓 Student

* Complete profile (CGPA & skills editable)
* Department fixed at creation - only be updated by admin.
* Year updated by system/admin
* View **only eligible placement drives**
* Apply once per drive
* Upload resume per application
* Track application status & history


### 🧑‍💼 Coordinator (TPO)

* Create placement drives
* Define eligibility rules
* View applicants
* Shortlist / reject students
* View ATS scores

### 🛠️ Admin

* Create coordinators
* Can correct student department/year in exceptional cases
* Change user roles
* Minimal system control
* No dependency on Clerk dashboard

---

## 📐 Core Business Rules

* One application per student per drive
* Resume uploaded per job
* Eligibility evaluated at apply time
* Department is immutable
* Year of study is system-managed (not student-editable)
* CGPA & skills are editable
* Ineligible drives are never returned
* Status changes are logged

---

## 📂 Project Structure

```
placement-portal/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── ats/
│   │   └── ats_score.py
│   │
│   ├── prisma.config.ts
│   ├── .env
│   └── package.json
│
├── frontend/
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── services/
│       ├── hooks/
│       └── features/
│
├── docs/
├── .gitignore
└── README.md
```

---

## 🔐 Authentication Flow

1. User logs in via Clerk
2. Clerk issues JWT
3. Frontend sends JWT with requests
4. Backend verifies JWT
5. User is auto-created (first login)
6. Role-based middleware controls access

---

## 📊 ATS Integration

* ATS implemented as **pure Python**
* Backend invokes ATS via CLI
* Resume file passed to script
* Numeric score returned
* Score stored with application
* Loosely coupled & replaceable

---

## 🚀 Development Status

### ✅ Completed

* Express server setup
* Global error handling
* PostgreSQL + Prisma integration
* User & StudentProfile schema
* Prisma migrations
* Clean backend architecture

### ⏳ In Progress

* Authentication & role mapping
* Placement drives
* Applications
* ATS integration

---

## 🛣️ Roadmap (High Level)

1. Authentication & role middleware
2. Student profile lifecycle
3. Placement drive creation
4. Application workflow
5. ATS scoring & shortlisting
6. Admin controls
7. UI polish & deployment

## 👤 Author

**Team-1**
B.Sc Computer Science