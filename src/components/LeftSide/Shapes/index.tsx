import React from 'react';
import Header from '../../common/Header';
import styles from './styles.module.css'

const Shapes = ({createElement}: propsType) => {
    const clickHandler = (name: string) => {
        createElement(name)
    }
    return (
        <>
            <Header title={'Shapes'}/>
            <div className={styles.wrap}>
                <div className={styles.figuresBlock}>
                    <div className={styles.triangle} onClick={() => clickHandler('triangle')}></div>
                    <div className={styles.rectangle} onClick={() => clickHandler('rectangle')}></div>
                </div>
            </div>
        </>
    );
};

export default Shapes;

type propsType = {
    createElement: (name: string) => void
}
