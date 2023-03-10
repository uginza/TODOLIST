import { AddCircle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import TextField from "@mui/material/TextField/TextField";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type AddItemPropsType = {
    addItem: (newTitle: string) => void;
}

export function AddItem(props: AddItemPropsType) {

    const [title, setTitle] = useState('')

    let [error, setError] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if (event.key === 'Enter') {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim())
            setTitle('');
        } else {
            setError("Title is required")
        }

    }

    const buttonSettings = {
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px'
    }


    return (<div>
        {/* <input value={title}
               className={error ? "error" : ""}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}/>*/}
        <TextField size="small"
                   id="standard-basic"
                   label="Type title"
                   variant="outlined"
                   value={title}
                   error={!!error}
                   helperText={error}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
        {/*<button onClick={addTask}>+</button>*/}
        <IconButton color="secondary" style={buttonSettings} onClick={addTask}><AddCircle/></IconButton>
    </div>)
}