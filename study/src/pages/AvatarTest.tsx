import {Div, Title, Avatar} from "../components";
import * as D from "../data";

export default function AvatarTest() {
    const avatar = D.range(0, 10).map(index => (
        <Avatar
            key={index}
            src={D.randomAvatar()}
            className="inline-block -ml-6 border-4 border-white"
        />
    ))
    return (
        <section className="mt-4">
         <Title>AvatarTest</Title>
         <Div className="px-12 py-4 m-8 bg-blue-300">{avatars}</Div>
        </section>
    )
}
