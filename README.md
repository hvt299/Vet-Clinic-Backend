<div align="center">

  <h1>Vet Clinic Management System</h1>
  <h3>Hệ thống Quản lý Phòng khám Thú y Toàn diện</h3>

  <p>
    Một giải pháp phần mềm hiện đại giúp số hóa quy trình vận hành phòng khám thú y. 
    Hệ thống bao gồm quản lý hồ sơ bệnh án điện tử, theo dõi điều trị nội trú, quản lý kho dược và báo cáo doanh thu thông minh.
  </p>

  <p>
    <img src="https://img.shields.io/badge/NestJS-11.2.8-E0234E?logo=nestjs&logoColor=white" alt="NestJS">
    <img src="https://img.shields.io/badge/Mongoose-9.11.4-47A248?logo=mongodb&logoColor=white" alt="Mongoose">
    <img src="https://img.shields.io/badge/MongoDB-Atlas_NoSQL-47A248?logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Swagger-OpenAPI_3.0-85EA2D?logo=swagger&logoColor=black" alt="Swagger">
    <img src="https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens&logoColor=white" alt="JWT">
    <img src="https://img.shields.io/badge/status-Active_Development-success" alt="Status">
  </p>

</div>

<br />

# BACKEND API SERVICE

Đây là kho lưu trữ chứa mã nguồn **Backend**, đóng vai trò là lõi xử lý nghiệp vụ, quản lý cơ sở dữ liệu và cung cấp RESTful API cho toàn bộ hệ thống Vet Clinic.

---

## Mục lục

- [1. Công nghệ & Thư viện Cốt lõi](#1-công-nghệ--thư-viện-cốt-lõi)
  - [Khung Ứng dụng & Máy chủ Nền tảng](#khung-ứng-dụng--máy-chủ-nền-tảng)
  - [Cơ sở Dữ liệu & Quản lý Mô hình](#cơ-sở-dữ-liệu--quản-lý-mô-hình)
  - [Bảo mật, Định danh & Xác thực](#bảo-mật-định-danh--xác-thực)
  - [Đặc tả Tài liệu & Kiểm định Dữ liệu](#đặc-tả-tài-liệu--kiểm-định-dữ-liệu)
- [2. Tính năng Nghiệp vụ Cốt lõi](#2-tính-năng-nghiệp-vụ-cốt-lõi)
- [3. Tài liệu Đặc tả API (Swagger UI)](#3-tài-liệu-đặc-tả-api-swagger-ui)
- [4. Hướng dẫn Cài đặt & Khởi chạy](#4-hướng-dẫn-cài-đặt--khởi-chạy)
- [5. Cấu trúc Thư mục Dự án](#5-cấu-trúc-thư-mục-dự-án)
- [6. Kết nối Frontend Web Service](#6-kết-nối-frontend-web-service)
- [7. Tác giả](#7-tác-giả)

---

## 1. Công nghệ & Thư viện Cốt lõi

Dựa trên cấu hình kỹ thuật của hệ thống Backend:

### Khung Ứng dụng & Máy chủ Nền tảng

| Công nghệ / Thư viện | Phiên bản | Vai trò Kỹ thuật |
| :--- | :--- | :--- |
| **[NestJS](https://nestjs.com/)** | `^11.2.8` | Khung ứng dụng backend Node.js kiến trúc Modular, Dependency Injection |
| **[@nestjs/core](https://nestjs.com/)** | `^11.2.8` | Nhân xử lý cốt lõi của NestJS framework |
| **[@nestjs/platform-express](https://expressjs.com/)** | `^11.2.8` | Tầng chuyển tiếp HTTP adapter dựa trên nền tảng Express |
| **[TypeScript](https://www.typescriptlang.org/)** | `^5.9.3` | Ngôn ngữ lập trình chính, đảm bảo an toàn kiểu dữ liệu tĩnh |
| **[RxJS](https://rxjs.dev/)** | `^7.8.2` | Thư viện xử lý luồng sự kiện và tác vụ bất đồng bộ |

---

### Cơ sở Dữ liệu & Quản lý Mô hình

| Công nghệ / Thư viện | Phiên bản | Vai trò Kỹ thuật |
| :--- | :--- | :--- |
| **[@nestjs/mongoose](https://docs.nestjs.com/techniques/mongodb)** | `^11.0.4` | Tích hợp MongoDB và Mongoose vào hệ sinh thái NestJS |
| **[Mongoose](https://mongoosejs.com/)** | `^9.11.4` | Trình mô hình hóa đối tượng MongoDB (ODM), quản lý Schema & Validation dữ liệu |

---

### Bảo mật, Định danh & Xác thực

| Công nghệ / Thư viện | Phiên bản | Vai trò Kỹ thuật |
| :--- | :--- | :--- |
| **[passport-jwt](https://www.passportjs.org/packages/passport-jwt/)** | `^4.0.1` | Chiến lược Passport JWT phục vụ xác thực người dùng |
| **[@nestjs/jwt](https://docs.nestjs.com/security/authentication#jwt-functionality)** | `^11.0.2` | Quản lý, ký phát và kiểm tra tính hợp lệ của JWT Token |
| **[bcrypt](https://www.npmjs.com/package/bcrypt)** | `^6.0.0` | Băm mật khẩu người dùng với thuật toán một chiều an toàn |

---

### Đặc tả Tài liệu & Kiểm định Dữ liệu

| Công nghệ / Thư viện | Phiên bản | Vai trò Kỹ thuật |
| :--- | :--- | :--- |
| **[@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)** | `^11.4.7` | Tự động tạo tài liệu đặc tả OpenAPI và giao diện kiểm thử Swagger UI |
| **[class-validator](https://github.com/typestack/class-validator)** | `^0.14.3` | Kiểm tra tính hợp lệ dữ liệu đầu vào (DTO Validation) |
| **[class-transformer](https://github.com/typestack/class-transformer)** | `^0.5.1` | Tự động chuyển đổi và định dạng cấu trúc đối tượng dữ liệu |

---

## 2. Tính năng Nghiệp vụ Cốt lõi

Hệ thống được thiết kế theo cấu trúc Modular với các phân hệ nghiệp vụ độc lập:

* **Auth & Users:** Xác thực người dùng qua JWT Token, quản lý tài khoản và phân quyền người dùng đa cấp (Admin / Staff / Doctor).
* **Core Data:** Quản lý dữ liệu nền tảng gồm Khách hàng (`Customers`), Thú cưng (`Pets`) và Bác sĩ thú y (`Doctors`).
* **Pharmacy & Vaccine:** Quản lý kho dược phẩm (`Medicines`), danh mục vắc-xin và lịch sử tiêm phòng thú cưng (`PetVaccinations`).
* **Medical Treatment (Trọng tâm nghiệp vụ):**
  * **Treatment Courses:** Quản lý toàn bộ đợt điều trị (Nội trú / Ngoại trú).
  * **Treatment Sessions:** Ghi nhận chi tiết từng lần khám (chỉ số sinh tồn, ghi chú lâm sàng, diễn biến sức khỏe).
  * **Diagnoses & Prescriptions:** Lưu trữ chẩn đoán bệnh và kê đơn thuốc theo từng buổi khám.
* **Statistics & Analytics:** Cung cấp các API tổng hợp dữ liệu cho Dashboard quản trị (Doanh thu, Top bệnh lý thường gặp, Thống kê hoạt động khám bệnh trong ngày).

---

## 3. Tài liệu Đặc tả API (Swagger UI)

Sau khi khởi chạy máy chủ backend, truy cập giao diện tương tác và kiểm thử API tại địa chỉ:
```text
http://localhost:3001/api
```
Swagger UI cung cấp danh mục trực quan toàn bộ các endpoint, tham số truy vấn, cấu trúc request body và response schema.

---

## 4. Hướng dẫn Cài đặt & Khởi chạy

### Yêu cầu Hệ thống
* **Node.js:** Phiên bản `>= 20.0.0` (Khuyến nghị **Node.js 20.x** hoặc **22.x LTS**).
* **Cơ sở dữ liệu:** **MongoDB** (Cục bộ hoặc MongoDB Atlas).
* **Trình quản lý gói:** `npm`, `yarn`, `pnpm` hoặc `bun`.

### Quy trình Cài đặt

```bash
# 1. Tải mã nguồn Backend về máy cục bộ
git clone https://github.com/hvt299/Vet-Clinic-Backend.git
cd Vet-Clinic-Backend

# 2. Cài đặt toàn bộ thư viện phụ thuộc
npm install
```

### Cấu hình Biến Môi trường (.env)

Tạo tệp `.env` tại thư mục gốc của dự án:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/vet-clinic-db

JWT_SECRET=YourSecretKeyHere
JWT_EXPIRATION=1d
```

### Các Lệnh Thực thi

```bash
# 1. Khởi chạy môi trường phát triển (Watch mode)
npm run start:dev

# 2. Biên dịch bản phát hành sản phẩm (Production Build)
npm run build

# 3. Khởi chạy bản production đã biên dịch
npm run start:prod

# 4. Kiểm tra và định dạng quy chuẩn mã nguồn
npm run lint
npm run format
```

---

## 5. Cấu trúc Thư mục Dự án

```text
Vet-Clinic-Backend/
├── src/
│   ├── auth/                      # Tuyến xác thực, cấp phát token JWT và phân quyền
│   ├── customers/                 # Nghiệp vụ quản lý hồ sơ khách hàng
│   ├── pets/                      # Nghiệp vụ quản lý hồ sơ thú cưng
│   ├── doctors/                   # Nghiệp vụ quản lý bác sĩ chuyên trách
│   ├── medicines/                 # Nghiệp vụ quản lý kho dược phẩm
│   ├── vaccines/                  # Nghiệp vụ danh mục vắc-xin
│   ├── pet-vaccinations/          # Quản lý theo dõi lịch sử tiêm phòng
│   ├── treatment-courses/         # Nghiệp vụ quản lý các đợt điều trị
│   ├── treatment-sessions/        # Quản lý chi tiết từng buổi khám bệnh
│   ├── diagnoses/                 # Nghiệp vụ chẩn đoán bệnh lý
│   ├── prescriptions/             # Quản lý kê đơn và cấp phát thuốc
│   ├── statistics/                # Thống kê, báo cáo và dữ liệu dashboard
│   ├── app.module.ts              # Root Module điều phối toàn bộ hệ thống
│   └── main.ts                    # Điểm khởi động ứng dụng, Swagger và CORS
├── package.json                   # Danh mục thư viện và scripts dự án
├── tsconfig.json                  # Cấu hình kiểm tra kiểu dữ liệu TypeScript
└── nest-cli.json                  # Cấu hình NestJS CLI
```

---

## 6. Kết nối Frontend Web Service

Dịch vụ Backend này cung cấp toàn bộ RESTful API lõi cho ứng dụng **Vet Clinic Frontend Web Portal** (Next.js 16 App Router):
* Cấu hình CORS đã được mở cho phép máy chủ Frontend (`http://localhost:3000`) truy vấn.
* Các endpoint yêu cầu xác thực cần gửi kèm header `Authorization: Bearer <token>`.
* Cổng hoạt động mặc định của Backend: `http://localhost:3001`.

---

## 7. Tác giả

Được phát triển bởi **Mr.T (hvt299)**  
GitHub: [https://github.com/hvt299](https://github.com/hvt299)
