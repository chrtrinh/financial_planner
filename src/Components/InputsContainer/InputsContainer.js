import React, { useState } from 'react';
import './InputsContainer.css';

function InputsContainer() {
	const [inputSlice, setInputSlice] = useState({});

	return <div className="inputsContainer">{inputSlice.test}</div>;
}
export default InputsContainer;
