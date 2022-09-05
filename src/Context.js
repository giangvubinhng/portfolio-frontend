import React, {createContext, useState} from 'react';

export const appContext = createContext({});
export default function Context(props) {
  const initialShowEffect = true;
	const [showEffect, setShowEffect] = useState(initialShowEffect);
	return (
		<appContext.Provider value={{effect: [showEffect, setShowEffect]}}>{props.children}</appContext.Provider>
	)
}
