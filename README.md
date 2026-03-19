# 🏥 Hospital Management System (HMS) - Kubernetes Production Project

## 📌 About the Project

This is a **cloud-native Hospital Management System** built using a **microservices architecture** and deployed on **Kubernetes**.

The system is designed to handle hospital operations such as:
- Patient management
- Doctor management
- Appointment scheduling
- Billing & payments
- Authentication & authorization
- Notifications (email/SMS)

It follows **DevOps best practices** including CI/CD, containerization, security scanning, and monitoring.

---

## 🧱 Tech Stack

- **Backend:** Node.js (Express)
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **CI/CD:** Jenkins / GitHub Actions
- **Code Quality:** SonarQube
- **Security:** Trivy, OWASP ZAP
- **Monitoring:** Prometheus + Grafana
- **Cloud (Recommended):** GCP (GKE)

---

## 🏗 Architecture Overview

Client → Ingress → API Gateway → Microservices → Database

Microservices:
- patient-service
- doctor-service
- appointment-service
- billing-service
- auth-service
- notification-service

---

## ⚙️ Installation & Setup Guide

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
```

---

### 🔹 2. Run Locally (Docker Compose)

```bash
docker-compose up --build
```

Access:
```
http://localhost:8080
```
Avinash Kumar
