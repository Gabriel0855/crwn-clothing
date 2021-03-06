import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './withSpinner.styles.jsx';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (<SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> ) : (<WrappedComponent {...otherProps} />) 
}

export default WithSpinner;