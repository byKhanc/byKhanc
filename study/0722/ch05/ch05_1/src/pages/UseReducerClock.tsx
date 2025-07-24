import { useReducer } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import type {AppState} from '../store';
import {Div, Title, SubTitle} from '../components';
import {useInterval} from '../hooks';
import { SetTodayAction } from '../store/actions';


export default function ReduxClock() {
  const [{today}, dispatch] = useReducer((state: AppState, action: SetTodayAction) => {
    switch (action.type) {
      case 'setToday':
        return {...state, today: new Date()};
    }
        return state; // 필수
    },
    {
      today: new Date(),
    }
  )

      useInterval(() => {
        dispatch({type: 'setToday', today: new Date()});
    });

  return (
    <Div className="flex flex-col items-center justify-center m-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <SubTitle className="mt-4 text-2xl">{today.toLocaleDateString()}</SubTitle>
    </Div>
  );
}