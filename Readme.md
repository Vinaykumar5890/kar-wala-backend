# 🚗 Vehicle Marketplace Backend API

A complete backend system similar to **Kar-Wala** built using **Node.js, Express, MongoDB, JWT**.

Supports **Seller, Buyer, Admin** roles with full authentication, vehicle listing, approval, and buying flow.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Role-based Access Control

---

## 📁 Project Structure

```
backend/
│── app.js
│── server.js
│── .env
│── models/
│   ├── User.js
│   ├── Vehicle.js
│   └── Order.js
│── routes/
│   ├── auth.routes.js
│   ├── vehicle.routes.js
│   └── order.routes.js
│── middleware/
│   ├── auth.js
│   └── role.js
```

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
JWT_SECRET=spinny_backend_secret_2026
ADMIN_SECRET=admin@123
```

---

## 🔐 Authentication APIs

### 1️⃣ Signup

**POST** `/auth/signup`

```json
{
  "name": "User Name",
  "email": "user@gmail.com",
  "password": "123456",
  "role": "buyer | seller | admin"
}
```

---

### 2️⃣ Login

**POST** `/auth/login`

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

**Response**

```json
{
  "token": "JWT_TOKEN"
}
```

Use this token in all protected APIs:

```
Authorization: Bearer JWT_TOKEN
```

---

## 🚘 Vehicle APIs

### 3️⃣ Seller – Add Vehicle

**POST** `/vehicles`

**Role:** Seller

```json
{
  "title": "Hyundai i20",
  "brand": "Hyundai",
  "price": 600000,
  "city": "Delhi"
}
```

Vehicle status defaults to `pending`.

---

### 4️⃣ Admin – Approve Vehicle

**PATCH** `/admin/vehicles/:id/approve`

**Role:** Admin

```json
{
  "status": "approved"
}
```

---

### 5️⃣ Buyer – Fetch Approved Vehicles

**GET** `/vehicles/buyer`

**Role:** Buyer

Returns only vehicles with `status = approved`.

---

### 6️⃣ Public – Get Single Vehicle

**GET** `/vehicles/:id`

---

## 🛒 Order (Buy) APIs

### 7️⃣ Buyer – Buy Vehicle

**POST** `/orders/:vehicleId`

**Role:** Buyer

* Vehicle must be `approved`
* Vehicle status becomes `sold`

---

### 8️⃣ Buyer – Fetch Purchased Vehicles

**GET** `/orders/buyer`

Returns buyer's orders with vehicle details.

---

## 🔒 Role Rules Summary

| Role   | Permissions      |
| ------ | ---------------- |
| Seller | Add vehicles     |
| Admin  | Approve vehicles |
| Buyer  | Buy vehicles     |

---

## 🔁 Complete Application Flow

```
Seller Signup → Add Vehicle (pending)
Admin Login → Approve Vehicle
Buyer Signup → Fetch Vehicles → Buy Vehicle
Vehicle → SOLD
```

---

## ❌ Common Errors

* **Access denied** → Wrong role or missing token
* **Vehicle not available** → Not approved or already sold
* **JWT error** → Missing `JWT_SECRET`

---

## 🚀 Run Project

```bash
npm install
npm run dev
```

---

## 📌 Future Enhancements

* Payment gateway
* Order cancellation
* Admin dashboard
* Image upload

---

### ✅ Backend ready for frontend / production expansion
