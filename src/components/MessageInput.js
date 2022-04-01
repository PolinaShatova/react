import { Send } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/styled-engine-sc";
import { makeStyles } from '@mui/material';
import { useEffect, useRef, useState } from "react";


  const useStyles = makeStyles({
    paper: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: ThemeProvider.spacing(1)
      },
      input: {
          flexGrow: 1
      }
  });


export const MessageInput = (props) => {
    const classes = useStyles();

    const [value, setValue] = useState(''); //inputValue - хранит состояние

    const inputRef = useRef(null);

    const resetForm = () => {
        setValue("");
    }

    const onSubmitMessage = (event) => {
        event.preventDefault();
    // sendMessage('user', inputValue);
        props.onSend(value);
        resetForm();
    }

    const onChangeMessageInput = (event) => { //когда я что-то буду вводить в инпут будет приходить событие
        setValue(event.target.value); //узнаю что вводит пользователь и сохраняю в стейт
    };
    
    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <Paper
            className={classes.paper}
            component="form"
            onSubmit={onSubmitMessage}
        >
            <InputBase
                inputRef={inputRef}
                className={classes.input}
                onChange={onChangeMessageInput}
                placeholder={props.placeholder}
                value={value}
                type="text"
            />
            <IconButton type="submit">
                <Send />
            </IconButton>
        </Paper>
    );
}