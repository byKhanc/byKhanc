import { welcomeMessages } from '../data/welcomeMessages';

export default function GreetingList() {
    return (
        <ul className="space-y-2">
            {welcomeMessages.map((msg, idx) => {}
               return (
                <li key={idx} className="p-3 rounded shadow bg-blue-100">
                 {msg}
                </li>
               );
        )}
        </ul>
    );
}
