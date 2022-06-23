import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
    margin-top:5px;
    text-align:left;

    
`

export default function Todo({ todo, onCheckBtnClick }) {
    return (
        <ButtonStyled
            shouldFitContainer
            iconAfter={
                <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>

                </span>
            }
        >{todo.name}
        </ButtonStyled>
    )
}
