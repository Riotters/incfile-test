import React from 'react';
import { navigate} from "gatsby";

const NonprofitCorporation = () => {
    if (typeof window !== 'undefined') {
        navigate('/what-is-non-profit-corporation/');
    }
    
    return null;
}

export default NonprofitCorporation;