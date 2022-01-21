import React from 'react';

type buttonsPropsType = {
    name: string
    onClickInc: () => void
    disabledBtn?: boolean
}


function Buttons(props: buttonsPropsType) {
    return (
        <div className={props.disabledBtn ? 'disabled' : ''}>
            <button className={'btn'}
                    disabled={props.disabledBtn}
                    onClick={() => props.onClickInc()}>
                {props.name}
            </button>


        </div>
    );
}

export default Buttons;