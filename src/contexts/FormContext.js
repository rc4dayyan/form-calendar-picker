import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    let tomorrow  = moment(new Date()).add(1,'days');

    let afterTomorrow  = moment(new Date()).add(2,'days');

    const [ searchParams, setSearchParams ] = useState(() => {
        const localData = localStorage.getItem('submited-search-params');

        return localData ? JSON.parse(localData) : {
            startDate: tomorrow.format('ddd, MMM DD YYYY'), 
            endDate: afterTomorrow.format('ddd, MMM DD YYYY')
        }
    });

    return (  
        <FormContext.Provider value={{ searchParams, setSearchParams }}>
            {props.children}
        </FormContext.Provider>
    );
}

FormContextProvider.propTypes = {
    children: PropTypes.node,
};

export default FormContextProvider;