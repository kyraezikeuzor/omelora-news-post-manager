'use client'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'

type SelectProps = {
    children: React.ReactNode;
    onSelectOn?: any;
    onSelectOff?:any;
}

const Select = ({children, onSelectOn, onSelectOff}: SelectProps) => {

    const [click, setClick] = useState(false)
    const [prevClick, setPrevClick] = useState(false);

    useEffect(() => {
      // Update prevClick whenever click changes
      setPrevClick(click);
    }, [click]);

    useEffect(() => {
        // Check conditions and call appropriate functions
        if (!click && prevClick) {
            onSelectOff();
        } else if (click && !prevClick) {
            onSelectOn();
        }
      }, [click, prevClick]);

    return (
        <>
          <div 
          onClick={() => setClick(!click)} 
          className={`flex flex-row gap-2 p-1 items-center rounded-lg ${click ? 'bg-[--clr-blue-light] border-4 border-[--clr-blue-base]' : 'bg-[--clr-grey-light] border-4 border-[--clr-grey-base]'} `}>
            {children}
          </div>
        </>
    )
}

export default Select;