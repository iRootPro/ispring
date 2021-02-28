import React from 'react';
import Header from '../../common/Header';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../app/store";
import {setColorShape, shapesType} from '../../../reducers/draw-reducer';

const Styles = () => {
    const selectID = useSelector<RootStateType, null | number>(state => state.draw.selectShapeID)
    const shapes = useSelector<RootStateType, Array<shapesType>>(state => state.draw.shapes)
    const dispatch = useDispatch()
    let currentColor: string = 'black'
    const selectShape = shapes.filter(shape => shape.id === selectID)
    if (selectShape.length === 1) {
        currentColor = selectShape[0].color
    }

    const handleChangeColor = (color: string) => {
        dispatch(setColorShape({id: selectID, color: color}))
    }
    return (
        <>
            <Header title={'Style'}/>
            <div className={styles.wrap}>
                <span className={styles.title}>Fill</span>
                <input disabled={selectID ? false : true} type="color" value={currentColor} onChange={(e) =>
                    handleChangeColor(e.target.value)}/>
            </div>
        </>
    );
};

export default Styles;
