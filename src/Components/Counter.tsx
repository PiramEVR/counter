import React from 'react';
import {Link} from 'react-router-dom';
import Buttons from "./Buttons";

type counterPropsType = {
    count: number
    inc: () => void
    reset: () => void
    disabledCount: boolean
    disabledReset: boolean
}

function Counter(props: counterPropsType) {


    return (
        <div>
            <div className={'show-counter'}>
                {props.count}

            </div>
            <div className={'buttons'}>
                <Buttons name={'INC'} onClickInc={props.inc} disabledBtn={props.disabledCount}/>
                <Buttons name={'RESET'} onClickInc={props.reset} disabledBtn={props.disabledReset}/>
                <Link to={'/set'}>
                    <Buttons name={'SET'} onClickInc={() => {
                    }}/>
                </Link>
            </div>
        </div>

    );
}

export default Counter;