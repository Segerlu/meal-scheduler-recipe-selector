import './Tabs.css'
import { Link } from "react-router-dom";

let tabList = [
    'HOME',
    'RECIPES',
    'FAVORITES',
    'SCHEDULE'
];

const Tabs = () => {

    return (
        <div>
            <ul id='tabs'>
                {tabList.map((tab) => (
                    <p key={tab} className='tab' >
                        <Link to={`/${tab.toLowerCase()}`}>{tab}</Link>
                    </p>))}
            </ul>

        </div>
    )
}

export default Tabs
