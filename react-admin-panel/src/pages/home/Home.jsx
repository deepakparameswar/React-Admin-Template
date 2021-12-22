import Charts from '../../components/charts/Charts'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import WidgetLg from '../../components/widgetLg/widgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import {userData} from '../../dummyData'

import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
