
import { ClassNames } from '@emotion/react';
import { Container, InputBase, makeStyles, Paper} from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState(''); //inputValue - хранит состояние
  
  const [messageList, setMessageList] = useState([]); //массив в котором хранятся задачи, базовое состояние - пустой массив

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
    resetInputValue();
  }

  const resetInputValue = () => {
    setInputValue('');
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();//чтобы избежать перезагрузку страницы
  //   const list = {
  //     author: false,
  //     text: inputValue
  //   };
  //   setMessageList([
  //     ...messageList,
  //     list
  //   ])
  //   setInputValue('');
  // };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage('user', inputValue);
  }

  const onChangeInput = (event) => { //когда я что-то буду вводить в инпут будет приходить событие
    setInputValue(event.target.value); //узнаю что вводит пользователь и сохраняю в стейт
  };

  useEffect(() => {
    if (messageList.length === 0) {//если список сообщений не изменился
      return;
    }

    const tail = messageList[messageList.length - 1]; //проверяем кто был автором, последнее сообщение из списка
    if (tail.author === 'bot') {
      return;
    }

    setTimeout(() => {
      sendMessage('bot', 'hello');
    },1000)

  }, [messageList]); //каждый раз когда меняется messageList, применяется функция внутри


    useEffect(() => {
      inputRef.current.focus();
    });
  

  const useStyles = makeStyles({
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr'
    }
  });

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          padding: 2,
          height: '80vh'
        }}
        elevation={3}
        // className={classes.paper}
        // component="form"
        // onSubmit={onSubmitMessage}
      >
{/* 
        <InputBase
          inputRef={inputRef}
        /> */}
        
      <ul>
      {
        messageList.map(({ author, text}) => {
          return <li>
            <p> {author}: {text}</p>
          </li>
        })
      }
      </ul>
      
      <form onSubmit={onSubmitMessage}>
        <input value={inputValue} onChange={onChangeInput}></input>
        <button type='submit'>Отправить</button>
      </form>

      </Paper>
    </Container>
  );
};

export default App;
