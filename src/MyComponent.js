import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({name, children, age}) => {

    return (

        <div>
            <h1>안녕하세요 제이름은 {name}</h1><br/>
            <h2>내나이는 {age} 살.</h2>
            children의 값은 {children}입니다.
        </div>
    )
};

MyComponent.defaultProps = {
    name: "째째문"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default MyComponent;