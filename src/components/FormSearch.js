import React, { useState, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import moment from 'moment';
import InfiniteCalendar, { withRange, Calendar} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


const FormSearch = () => {
    
    let classNames = require('classnames');

    const { searchParams, setSearchParams } = useContext(FormContext);

    let tomorrow  = moment(new Date()).add(1,'days');
    let afterTomorrow  = moment(new Date()).add(2,'days');

    const changeDate = (dataDate) => {
        console.log(dataDate);
        console.log(moment(dataDate.start) ? moment(dataDate.start).format("D") : tomorrow.format("D"));

        setSearchParams({
            ...searchParams,
            startDate: dataDate.start ? moment(dataDate.start).format('ddd, MMM DD YYYY') : tomorrow.format('ddd, MMM DD YYYY'), 
            endDate: dataDate.end ? moment(dataDate.end).format('ddd, MMM DD YYYY') : afterTomorrow.format('ddd, MMM DD YYYY'), 
        });
    }

    const [ submitedSearchParams, setSubmitedSearchParams ] = useState(() => {
        const localData = localStorage.getItem('submited-search-params');
        return localData ? JSON.parse(localData) : {}
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitedSearchParams({endDate: searchParams.endDate, startDate: searchParams.startDate});
        console.log(searchParams);
    }
    
    const [ datePickerIsOpen, isDatePickerIsOpen ] = useState(false);
    const openDatePicker = () => {
        isDatePickerIsOpen(!datePickerIsOpen);
    }
    
    const [state] = useState({
        start: searchParams.startDate,
        end: searchParams.endDate  
    });

    const getNight = () => {
        let dateStart= moment(searchParams.startDate);
        let dateEnd= moment(searchParams.endDate);
        let diff = dateEnd.diff(dateStart);
        let diffDuration = moment.duration(diff);
        return "( "+ diffDuration.asDays() + " Nights )";
    }

    const onCalendarSelect = (e) => {
        console.log(e);
        if (e.eventType === 3) {
            changeDate(e);
        }
    }

    return (  
        <div className="container" style={{padding: '40px 0 20px 0'}}>
            <form onSubmit={handleSubmit}>
                <div className="row">

                    <div className="col s12" style={{marginBottom: '0px'}}>
                        <div className="row" style={{marginBottom: '0px'}}>
                            <div className="col s4" onClick={openDatePicker}>
                                <div className="z-depth-4 white-box">
                                    <i className="material-icons prefix blue-text text-darken-2" style={{fontSize: '2rem'}}>date_range</i> &nbsp;
                                    <span className="grey-text">From Date</span><br />
                                    <span className="date-title">{moment(searchParams.startDate).format('ddd, DD MMM YYYY')}</span>
                                </div>
                            </div>
                            <div className="col s4" onClick={openDatePicker}>
                                <div className="z-depth-4 white-box">
                                    <i className="material-icons prefix blue-text text-darken-2" style={{fontSize: '2rem'}}>date_range</i> &nbsp;
                                    <span className="grey-text">To Date</span> <br />
                                    <span className="date-title">{moment(searchParams.endDate).format('ddd, DD MMM YYYY')}</span>
                                </div>
                            </div>
                            <div className="col s4">
                                <a style={{display: 'block'}} className="btn-submit waves-effect waves-light btn btn-large animated tada orange darken-3 valign-wrapper center-align btn-search" href="#!" onClick={handleSubmit}> 
                                    Submit
                                </a>
                            </div>
                        </div>
                    </div>        
                    
                
                    <div className={ classNames({ hiddenText: !datePickerIsOpen, 'col s12': true }) }>
                        <div className="modal-dialogs-large" onBlur={openDatePicker}>
                            <div className="white">    
                                <InfiniteCalendar
                                Component={withRange(Calendar)}
                                selected={state}
                                onSelect={onCalendarSelect}
                                width='100%'
                                height={250}
                                />

                                <a href="#!" onClick={openDatePicker} className="waves-effect waves-light btn btn-large orange darken-3" style={{width: '100%'}}>
                                    OK {getNight()}
                                </a>
                            </div>
                        </div>
                        <div className="modal-overlay-large" style={{display:'block',opacity: '0.5'}}></div>
                    </div>
                </div>
            
            </form>    

            <div className="row">
                <div className="col s12">
                    <div className={classNames({'submited-search': true, hiddenText: typeof submitedSearchParams.startDate === 'undefined'})}>
                        Your submited Search: <br />
                        
                        <span style={{fontSize: '20px'}}>{submitedSearchParams.startDate+" - "+submitedSearchParams.endDate}</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}
 
export default FormSearch;