import React, {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import Buttons from "./Buttons";

type setPropsType = {
    startValue: number
    endValue: number
    setNewStartValue: (value: number) => void
    setNewEndValue: (value: number) => void
}

function Set(
    {startValue, endValue, setNewStartValue, setNewEndValue, ...props}
        : setPropsType) {

    const [error, setError] = useState<string>('')

    const disabledSet = !!error

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        let startValueInput = Number(e.currentTarget.value)
        startValueInput < 0 || startValueInput >= endValue ? setError('error_start-value') : setError('')
        setNewStartValue(startValueInput)
    }
    const onChangeHandlerEnd = (e: ChangeEvent<HTMLInputElement>) => {
        let endValueInput = Number(e.currentTarget.value)
        endValueInput <= startValue ? setError('error_end-value') : setError('')
        setNewEndValue(Number(e.currentTarget.value))
    }
    return (
        <div>
            <div className={'set-style'}>
                <div>
                    <span className={'nameValue'}> Start value </span>
                    <input type="number"
                           value={startValue}
                           onChange={onChangeHandlerStart}
                           className={error === 'error_start-value' ? 'error' : ''}
                    />
                </div>
                <div>
                    <span className={'nameValue'}>End value </span>
                    <input type="number"
                           value={endValue}
                           onChange={onChangeHandlerEnd}
                           className={error === 'error_end-value' ? 'error' : ''}
                    />
                </div>
            </div>
            <div className={'buttons'}>
                <Link to={'/'}>
                    <Buttons name={'SET'} onClickInc={() => {
                    }} disabledBtn={disabledSet}/>
                </Link>
            </div>
        </div>
    );
}

export default Set;