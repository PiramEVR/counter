import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Set from "./Components/Set";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)

    useEffect(() => {
        let counterValue = localStorage.getItem('counterValue')
        if (counterValue) {
            let parseStringToNumber = JSON.parse(counterValue)
            setCount(Number(parseStringToNumber))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        if (startValue) {
            let parseStringToNumberstartValue = JSON.parse(startValue)
            setStartValue(Number(parseStringToNumberstartValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        let endValue = localStorage.getItem('endValue')
        if (endValue) {
            let parseStringToNumberEndValue = JSON.parse(endValue)
            setEndValue(Number(parseStringToNumberEndValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('endValue', JSON.stringify(endValue))
    }, [endValue])

    const inc = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(startValue)
    }

    const disabledCount = count >= endValue
    const disabledReset = count <= startValue

    const setNewStartValue = (value: number) => {
        setStartValue(value)
        setCount(value)
    }

    const setNewEndValue = (value: number) => {
        setEndValue(value)
    }

    return (
        <BrowserRouter>
            <div className={'counter'}>
                <Routes>

                    <Route path={'/'} element={
                        <Counter count={count} inc={inc}
                                 reset={reset}
                                 disabledCount={disabledCount}
                                 disabledReset={disabledReset}/>
                    }/>
                    <Route path={'/set'} element={
                        <Set startValue={startValue}
                             endValue={endValue}
                             setNewStartValue={setNewStartValue}
                             setNewEndValue={setNewEndValue}
                        />
                    }/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;