import React, {useState} from "react";

const EventPractice = () => {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');

    const onChangeMessage = (e) => setMessage(e.target.value);
    const onChangeUser = (e) => setUser(e.target.value);

    const onClick = (e) => {
        alert(message);
        setMessage('');
        setUser('');
    };
    const onKeyPress = (e) => {
        if (e.key  === 'Enter'){
            onClick();
        }
    };


    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="user" placeholder="사용자명"  value={user} onChange={onChangeUser}/><br/>
            <input type="text" name="message" placeholder="아무거나 입력하세요" value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>출력!</button>
        </div>
    );
};

export default EventPractice;