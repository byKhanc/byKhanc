import type { DragEvent } from 'react';

export default function DragDrop() {
};

const onDragEnd = (e: DragEvent<HTMLElement>) => {
    return <div>
        <p>DragDrop</p>
        <div draggable onDragStart={} onDragEnter={}>
            <h1>Drag Me</h1>
    </div>
    <div onDrop={} onDragOver={}>
        <h1>Drop </h1>
    </div>
}