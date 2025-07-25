# 🔐 자료 보호와 암호화 기술 정리

## 📌 1. 해싱 (Hashing)

### 🔷 개념
- 입력값(데이터)을 고정된 길이의 해시값으로 변환
- **일방향 함수**: 해시값으로부터 원래 데이터를 복원할 수 없음

### 🔷 특징
- 동일한 입력 → 동일한 출력
- 다른 입력 → 거의 항상 다른 출력
- **무결성 검증, 비밀번호 저장, 디지털 서명 등에 사용**

### 🔷 대표 알고리즘
- **MD5**: 빠르지만 충돌 발생 가능성 높아 보안 약함
- **SHA-1**: 보안성 약화로 사용 지양
- **SHA-2** (SHA-256, SHA-512): 현재 가장 많이 사용
- **SHA-3**: 차세대 해시 알고리즘

### ✅ 사용 예시
- 파일의 무결성 검사
- 로그인 시 비밀번호 검증 (비밀번호 → 해시값 저장)

---

## 📌 2. 대칭키 암호화 (Symmetric Encryption)

### 🔷 개념
- **같은 키**로 암호화와 복호화를 수행
- 송신자와 수신자가 **공통 키를 공유**해야 함

### 🔷 특징
- **속도 빠름**, 구현 간단
- **키 관리가 어려움** (키 유출 시 보안 위협)

### 🔷 대표 알고리즘
- **AES** (Advanced Encryption Standard): 가장 널리 쓰이는 현대 표준
- **DES** (Data Encryption Standard): 보안성 낮아 현재는 거의 사용 안 함
- **Blowfish, RC4, ChaCha20** 등

### ✅ 사용 예시
- 파일/디스크 암호화
- VPN, SSL/TLS 내부 통신 암호화

---

## 📌 3. 비대칭키 암호화 (Asymmetric Encryption)

### 🔷 개념
- **공개키(Public Key)**로 암호화하고, **개인키(Private Key)**로 복호화 (또는 그 반대)
- 공개키는 누구나 볼 수 있고, 개인키는 비밀로 보관

### 🔷 특징
- **키 분배 용이**
- **속도는 대칭키보다 느림**
- 디지털 서명, 인증서, 키 교환 등에 활용

### 🔷 대표 알고리즘
- **RSA**: 가장 대표적인 비대칭 암호화
- **ECC** (Elliptic Curve Cryptography): 짧은 키로 높은 보안
- **DSA** (Digital Signature Algorithm): 디지털 서명 전용

### ✅ 사용 예시
- 이메일 암호화 (PGP, GPG)
- 디지털 서명 및 인증서 (SSL/TLS 인증서)
- 블록체인 지갑 주소 생성

---

## 📊 3종 암호 기술 비교

| 구분        | 해싱                          | 대칭키 암호화                     | 비대칭키 암호화                  |
|-------------|-------------------------------|----------------------------------|----------------------------------|
| 🔐 목적     | 무결성 확인                   | 기밀성 확보                       | 기밀성 + 인증 + 서명             |
| 🔁 방향성   | 일방향 (복호화 불가)          | 양방향 (같은 키 사용)             | 양방향 (공개/개인키 분리)         |
| ⚡ 속도     | 매우 빠름                    | 빠름                             | 느림                             |
| 🔑 키 관리  | 키 없음                      | 키 공유 필요                      | 공개키 공개, 개인키 비밀 유지     |
| 🔍 대표 용도| 비밀번호 저장, 무결성 검증   | 파일 암호화, 통신 암호화   
