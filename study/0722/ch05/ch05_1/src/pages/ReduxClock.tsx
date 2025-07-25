import {useSelector, useDispatch} from 'react-redux';
import type {AppState} from '../store';
import {Div, Title, SubTitle} from '../components';
import {useInterval} from '../hooks';


export default function ReduxClock() {
  const today = useSelector<AppState, Date>(state => state.today);
  const dispatch = useDispatch();
  
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