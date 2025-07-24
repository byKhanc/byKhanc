import {Button} from '../../theme/daisyui'

export default function Basic() {
    return (
        <section className="mt-4">
            <h2 className="text-3xl font-bold text-center">ButtonTest Basic</h2>
            <div className="mt-4 flex justify-evenly">
                <button className="btn btn-primary">DAISYUI Button</button>
                <Button className="btn btn-primary">Button</Button>
            </div>
        </section>
    )
}