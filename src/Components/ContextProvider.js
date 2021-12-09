import {createContext, useState} from "react";

export const SelectedOptionContext = createContext(null);
export const SensitivityContext = createContext(null);
export const FilterContext = createContext(null);

export function ContextProvider(props){
    const [selectionOption, setSelectedOption] = useState(2);
    const [sensitivity, setSensitivity] = useState(6);
    const [filter, setFilter] = useState("");

    return(
        <SelectedOptionContext.Provider value={{selectionOption, setSelectedOption}}>
            <SensitivityContext.Provider value={{sensitivity, setSensitivity}}>
                <FilterContext.Provider value={{filter, setFilter}}>
                    {props.children}
                </FilterContext.Provider>
            </SensitivityContext.Provider>
        </SelectedOptionContext.Provider>
    )
}

export default ContextProvider;