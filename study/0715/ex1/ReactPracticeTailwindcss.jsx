import React from 'react';
import './App.css';

// 1. 프로필 카드
function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded-lg shadow text-center">
      <img src="https://via.placeholder.com/100" className="rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">홍길동</h2>
      <p className="text-gray-500">Frontend Developer</p>
      <p className="mt-2 text-sm text-gray-700">React와 Tailwind를 배우는 중입니다.</p>
    </div>
  );
}

// 2. 버튼 그룹
function ButtonGroup() {
  return (
    <div className="flex justify-center mt-10 space-x-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">홈</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">소개</button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">연락</button>
    </div>
  );
}

// 3. 카드 그리드
function CardGrid() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">🌱</div>
        <h3 className="text-lg font-bold mt-2">식물 가꾸기</h3>
        <p className="text-sm text-gray-600">매일 물을 주세요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">📅</div>
        <h3 className="text-lg font-bold mt-2">캘린더</h3>
        <p className="text-sm text-gray-600">일정을 기록해요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">💬</div>
        <h3 className="text-lg font-bold mt-2">커뮤니티</h3>
        <p className="text-sm text-gray-600">자유롭게 이야기 나눠요.</p>
      </div>
    </div>
  );
}

// 4. 네비게이션 바
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}

// 5. 로그인 폼
function LoginForm() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded shadow">
      <h2 className="text-lg font-bold mb-4 text-center">로그인</h2>
      <div className="mb-4">
        <input className="w-full border p-2 rounded focus:outline-none" type="email" placeholder="이메일" />
      </div>
      <div className="mb-4">
        <input className="w-full border p-2 rounded focus:outline-none" type="password" placeholder="비밀번호" />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">로그인</button>
    </div>
  );
}

// 메인 App 컴포넌트
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ProfileCard />
      <ButtonGroup />
      <CardGrid />
      <LoginForm />
    </div>
  );
}

export default App;