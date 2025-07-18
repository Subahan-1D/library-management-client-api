# 📚 Minimal Library Management System

A minimal Library Management System built with **React**, **TypeScript**, **Redux Toolkit Query**, **Tailwind CSS**, and a **Node.js + Express + MongoDB** backend.

---

## 🚀 Project Overview

This is a clean, functional client-side application for managing books and borrowing books **without authentication** or payment integration.  
It demonstrates proper **CRUD operations**, **state management**, **API integration**, and a minimalist, responsive UI.

---

## ✨ **Features**

### ✅ Public Routes
- All pages are accessible without login or authentication.

### 📚 Book Management
- **Book List Table** with columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions.
- **Add New Book:** Form to create a new book with title, author, genre, ISBN, description, copies.
- **Edit Book:** Update book info via pre-filled form.
- **Delete Book:** Remove a book with confirmation.
- **Borrow Book:** Borrow books by specifying quantity and due date.
- **Business Logic:** 
  - If `copies` reach 0, the book is marked as unavailable.

---

### 🔖 Borrow Summary
- Displays a list of borrowed books with total quantity borrowed.
- Retrieved from a backend aggregation API.

---

## 🗂️ **Pages**

| Route | Description |
|-------|--------------|
| `/books` | List all books with view, edit, delete, and borrow actions. |
| `/create-book` | Form to add a new book. |
| `/books/:id` | View detailed info of a book. |
| `/edit-book/:id` | Edit existing book details. |
| `/borrow/:bookId` | Borrow form for a selected book. |
| `/borrow-summary` | Aggregated summary of all borrowed books. |

---

## ⚙️ **Tech Stack**

| Layer | Technology |
|-------|-------------|
| Frontend | React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Styling | Tailwind CSS |

---

## 🗃️ **Backend**

- Modular MVC Pattern.
- Books Schema: `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`.
- Borrows Schema: Linked to books with `quantity`, `dueDate`.
- CRUD operations for both books and borrows.
- Copies updated and availability managed.
- API supports pagination for book listings.
- Clean error handling.
- **Ready to extend:** Add authentication later if needed.

---

## 🧩 **Frontend**

- **React + TypeScript**
- **Redux Toolkit Query**: For type-safe API calls.
- Fully responsive design with Tailwind CSS.
- Clean, minimal UI.
- Navigation bar with:
  - All Books
  - Add Book
  - Borrow Summary
- Optimistic UI updates (optional).
- Toast notifications (optional).

---

## ✅ **How to Run**

1️⃣ **Install dependencies**

```bash
npm install
# or

