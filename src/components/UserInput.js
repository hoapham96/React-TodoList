import React, {useState} from 'react'
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button'



function UserInput() {
    const [nameInput, setNameInput] = useState(JSON.parse(localStorage.getItem('is-open')) || false)

    const onAddBtnClick = () => {
        localStorage.setItem('is-open', JSON.stringify(!nameInput));
        setNameInput(!nameInput);
    }

    return (
        <div>
            <h3>Add User</h3>
            <Textfield
            name='add-user' 
            placeholder='Name'
            elemAfterInput={
                <Button isDisabled={false} appearance='primary' onClick={onAddBtnClick} >
                  Add
                </Button>}
                value={nameInput}
                // onChange={onTextInputChange}
            ></Textfield>
        </div>
    )
}

export default UserInput
