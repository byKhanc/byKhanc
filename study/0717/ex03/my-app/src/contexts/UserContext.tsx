import { createContext, useContext, useState } from 'react';

type User = {
    name: string;
    age: number;
};

const UserContext = createContext<User>({
    name: "",
    age: 0,
    });

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({
        name: "user1",
        age: 20,
    });

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function UseProfile() {
    const user = useContext<User>(UserContext);

    return (
        <div>
            <h2>사용자 정보</h2>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
        </div>
    );
}
