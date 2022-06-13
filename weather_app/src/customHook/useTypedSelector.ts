import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState} from '../Redux/Reducer';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
