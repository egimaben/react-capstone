import React from 'react';
import Highlight from 'react-highlight'
const Code = (props) => {
    const { language, snippet } = props
    return (<Highlight className={language}>
        {snippet}
    </Highlight>);
}
export default Code