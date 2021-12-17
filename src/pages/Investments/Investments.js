import Portfolio from './../../components/Routes/Investments/pages/Portfolio'
import Stocks from './../../components/Routes/Investments/pages/index'

function Investments() {
    return (
        <>
        <div className='cardExpen'>
            <Portfolio />
            <Stocks />
        </div>
        </>
    );
}

export default Investments;
