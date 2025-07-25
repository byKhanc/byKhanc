import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../store";
import { Title, SubTitle } from "../components";
import { Icon } from "../theme/daisyui";
import * as C from "../store/counter";

export default function CounterTest() {
    const dispatch = useDispatch();

    const counter = useSelector<AppState, C.State>(({counter}) => counter);
    const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch]);
    const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch]);

    return (
        <section className="m-4">
            <Title>CounterTest</Title>
            <div className="flex justify-center p-4 mt-4">
              <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
                <Icon name="add_circle" iconClassName="text-3xl" onClick={increase} />
                <SubTitle>{counter}</SubTitle>
                <Icon name="remove_circle" iconClassName="text-3xl" onClick={decrease} />
              </div>
            </div>
        </section>
    );
}