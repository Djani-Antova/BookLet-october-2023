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

// import { useState } from 'react';

// export default function useLocalStorage(key) {
    
//     const [value, setValue] = useState(() => {
//         const storedValue = localStorage.getItem(key);
//         return storedValue ? JSON.parse(storedValue) : null;
//     });

//     function setLocalStorage(newValue) {
//         if (newValue) {
//             localStorage.setItem(key, JSON.stringify(newValue));
//             setValue(newValue);
//         } else {
//             localStorage.removeItem(key);
//             setValue(null);
//         }
//     }

//     return [value, setLocalStorage];
// }