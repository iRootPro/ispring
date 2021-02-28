import React from 'react';
import styles from './styles.module.css'
import Shapes from "./Shapes";
import Styles from "./Styles";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {addShape, DrawStateType} from "../../reducers/draw-reducer";


const LeftSide = () => {
    const {ctx, currentColor} = useSelector<RootStateType, DrawStateType>(state => state.draw)
    const dispatch = useDispatch()
    const randomSide = (min: number, max: number) => {
        return min + Math.random() * (max + 1 - min);
    }
    const handleCreateElement = (name: string) => {
        if (!ctx) return
        switch (name) {
            case 'triangle': {
                const x = ctx.canvas.width / 2
                const y = ctx.canvas.height / 2
                dispatch(addShape({
                    x,
                    y,
                    color: currentColor,
                    type: 'triangle',
                    select: false,
                    id: Date.now()
                }))
                break
            }
            case 'rectangle': {
                const w = randomSide(100, 150)
                const h = 50
                const x = ctx.canvas.width / 2 - w / 2
                const y = ctx.canvas.height / 2 - h / 2
                dispatch(addShape({
                    x,
                    y,
                    h,
                    w,
                    type: 'rectangle',
                    color: currentColor,
                    select: false,
                    id: Date.now()
                }))
                break
            }
            default:
                break
        }
    }
    return (
        <div className={styles.leftSide}>
            <Shapes createElement={handleCreateElement}/>
            <Styles/>
        </div>
    );
};

export default LeftSide;

