import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState } from "../store/reducers/index";

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector;
