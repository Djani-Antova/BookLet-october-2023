import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {  
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return defaultValue;
    }
    );

    const setLocalStorage = (value) => {
        setState(value);

        let serializedValue;        

        if(typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));         
        } else {
            serializedValue = JSON.stringify(value);    
        }

        localStorage.setItem(key, serializedValue)
    }

    return [
        state, 
        setLocalStorage
    ];
}


