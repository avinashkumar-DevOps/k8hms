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
----------------------------------------------------------------------------------------------------------------------------------------------------------
## 🧱 Tech Stack

- **Backend:** Node.js (Express)
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **CI/CD:** Jenkins / GitHub Actions
- **Code Quality:** SonarQube
- **Security:** Trivy, OWASP ZAP
- **Monitoring:** Prometheus + Grafana
- **Cloud (Recommended):** GCP (GKE)

----------------------------------------------------------------------------------------------------------------------------------------------------------

## 🏗 Architecture Overview

Client → Ingress → API Gateway → Microservices → Database

Microservices:
- patient-service
- doctor-service
- appointment-service
- billing-service
- auth-service
- notification-service

----------------------------------------------------------------------------------------------------------------------------------------------------------

## ⚙️ Installation & Setup Guide

### 🔹 1. Clone Repository

```bash
git clone https://github.com/avinashkumar-DevOps/k8hms.git
cd k8hms
```
------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 2. Run Locally (Docker Compose)

```bash
docker-compose up --build
```
Access:
```
http://localhost:8080

------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 3. Run Individual Service (Manual)

```bash
cd services/patient-service
npm install
npm start
```
------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 4. Run Tests

```bash
npm test
```
------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 5. Build Docker Image

```bash
docker build -t your-dockerhub/patient-service ./services/patient-service
```

------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 6. Push to Docker Hub

```bash
docker push your-dockerhub/patient-service
```

------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 7. Deploy to Kubernetes

Make sure Kubernetes cluster is running (Minikube / GKE)

```bash
kubectl apply -f k8s/
```

Check pods:
```bash
kubectl get pods
```

------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 8. Access Application (NodePort)

```bash
kubectl get svc
```

Open in browser using NodePort or Ingress URL.

------------------------------------------------------------------------------------------------------------------------------------------------

## 🔄 CI/CD Pipeline Flow

GitHub → Jenkins → Test → SonarQube → Docker Build → Trivy Scan → Push → Kubernetes Deploy

------------------------------------------------------------------------------------------------------------------------------------------------

## 🔐 Security Features

- Container scanning using Trivy
- Static code analysis with SonarQube
- Secrets management via Kubernetes Secrets
Avinash Kumar
```
Avinash Kumar
