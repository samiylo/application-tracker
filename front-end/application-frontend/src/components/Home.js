import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(props) {

    const history = useHistory()
    return (
        <div>
                <img className={'home-button'} onClick={() => {history.goBack()}} src={'https://pngriver.com/wp-content/uploads/2018/04/Download-Back-Button-Png-Image-59237-For-Designing-Projects.png'} />
        </div>
    )
}
