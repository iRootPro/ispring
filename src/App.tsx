import React from 'react';
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RigthSide";
import styles from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loadState} from "./helpers/localStorage";
import {restoreStateLocalStorage} from "./reducers/draw-reducer";
import {RootStateType} from "./app/store";
import { setInitApp } from './reducers/app-reducer';

function App() {
    const ctx = useSelector<RootStateType>(state => state.draw.ctx)
    const isInit = useSelector<RootStateType, boolean>(state => state.app.isInit)
    const dispatch = useDispatch()
    if (ctx && !isInit) {
        const savedState = loadState()
        if (savedState) {
            dispatch(restoreStateLocalStorage(savedState))
        }
        dispatch(setInitApp())
    }

    return (
        <section className={styles.container}>
            <LeftSide/>
            <RightSide/>
        </section>
    );
}

export default App;
