<div align="center">

  <h1>🏥 Vet Clinic Management System</h1>
  <h3>Hệ thống Quản lý Phòng khám Thú y Toàn diện</h3>

  <p>
    Một giải pháp phần mềm hiện đại giúp số hóa quy trình vận hành phòng khám thú y. 
    Hệ thống bao gồm quản lý hồ sơ bệnh án điện tử, theo dõi điều trị nội trú, quản lý kho dược và báo cáo doanh thu thông minh.
  </p>

  <p>
    <img src="https://img.shields.io/badge/license-UNLICENSED-red" alt="License">
    <img src="https://img.shields.io/badge/status-Active_Development-success" alt="Status">
  </p>

</div>

<br />

# ⚙️ BACKEND API SERVICE

Đây là Repository chứa mã nguồn **Backend**, đóng vai trò là lõi xử lý nghiệp vụ, quản lý cơ sở dữ liệu và cung cấp RESTful API cho toàn bộ hệ thống.

## 🛠️ Công nghệ & Phiên bản

Dựa trên cấu hình `package.json`:

| Công nghệ | Phiên bản | Vai trò |
| :--- | :--- | :--- |
| **[NestJS](https://nestjs.com/)** | `^11.0.1` | Framework backend Node.js, kiến trúc Modular |
| **[@nestjs/mongoose](https://docs.nestjs.com/techniques/mongodb)** | `^11.0.4` | Tích hợp MongoDB với NestJS |
| **[Mongoose](https://mongoosejs.com/)** | `^9.1.6` | ODM MongoDB, quản lý Schema & Validation |
| **[TypeScript](https://www.typescriptlang.org/)** | `^5.7.3` | Ngôn ngữ lập trình chính |
| **[@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)** | `^11.2.6` | Tự động tạo tài liệu API (OpenAPI) |
| **[passport-jwt](https://www.passportjs.org/packages/passport-jwt/)** | `^4.0.1` | JWT Strategy cho Authentication |
| **[@nestjs/jwt](https://docs.nestjs.com/security/authentication#jwt-functionality)** | `^11.0.2` | Quản lý và ký JWT Token |
| **[class-validator](https://github.com/typestack/class-validator)** | `^0.14.3` | Kiểm tra tính hợp lệ dữ liệu (DTO Validation) |
| **[bcrypt](https://www.npmjs.com/package/bcrypt)** | `^6.0.0` | Hash mật khẩu người dùng |

## 🌟 Tính năng nghiệp vụ (Modules)

* **🔐 Auth & Users:** Xác thực người dùng (JWT), đăng nhập và phân quyền (Admin / Staff / Doctor).

* **🐾 Core Data:** Quản lý dữ liệu nền tảng gồm Khách hàng (`Customers`), Thú cưng (`Pets`) và Bác sĩ (`Doctors`).

* **💉 Pharmacy & Vaccine:** Quản lý kho thuốc (`Medicines`), danh mục vắc-xin và lịch sử tiêm phòng (`PetVaccinations`).

* **🩺 Medical Treatment (Trọng tâm):**
    * **Treatment Courses:** Quản lý đợt điều trị (Nội trú / Ngoại trú).
    * **Sessions:** Ghi nhận chi tiết từng lần khám (chỉ số sinh tồn, ghi chú lâm sàng...).
    * **Diagnoses & Prescriptions:** Lưu trữ chẩn đoán và quản lý đơn thuốc theo từng buổi khám.

* **📊 Statistics:** Cung cấp API tổng hợp dữ liệu cho Dashboard (Doanh thu, Top bệnh lý, Hoạt động trong ngày).

## 🚀 Cài đặt & Khởi chạy

### 1️⃣ Yêu cầu hệ thống (Prerequisites)

- Node.js >= 20
- MongoDB (Local hoặc MongoDB Atlas)

### 2️⃣ Clone & Cài đặt Dependencies

```bash
git clone https://github.com/hvt299/Vet-Clinic-Backend.git
cd Vet-Clinic-Backend
npm install
```

### 3️⃣ Cấu hình môi trường (.env)

Tạo file `.env` tại thư mục gốc của dự án:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/vet-clinic-db

JWT_SECRET=YourSecretKeyHere
JWT_EXPIRATION=1d
```

### 4️⃣ Lệnh chạy (Scripts)

```bash
# Chạy môi trường phát triển (Watch mode)
npm run start:dev

# Build ra production
npm run build

# Chạy bản production
npm run start:prod
```

### 5️⃣ Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:cov
```

## 📚 Tài liệu API

Sau khi chạy server, truy cập đường dẫn sau để xem toàn bộ endpoints:

http://localhost:3001/api

Swagger UI sẽ hiển thị danh sách đầy đủ các route, request body và response schema.

## 📂 Cấu trúc Module

```text
src/
├── app.module.ts          # Root module
├── main.ts                # Application entry point
├── auth/                  # Authentication & Authorization
├── customers/             # Customer management
├── pets/                  # Pet management
├── doctors/               # Doctor management
├── medicines/             # Pharmacy management
├── vaccines/              # Vaccine management
├── pet-vaccinations/      # Pet vaccination management
├── treatment-courses/     # Medical treatment logic
├── treatment-sessions/    # Medical session logic
├── diagnoses/             # Diagnose logic
├── prescriptions/         # Prescription logic
├── statistics/            # Dashboard & reporting
└── ...
```

## 👨‍💻 Author

Developed by **Mr.T (hvt299)**  
GitHub: [https://github.com/hvt299](https://github.com/hvt299)