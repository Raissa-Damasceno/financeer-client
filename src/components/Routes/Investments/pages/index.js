import React, { useState, useEffect } from 'react';
import {
    API_KEY,
    API_URL,
} from '../../../../config'


// Components
import SearchBar from './../utils/SearchBar';
import StockChart from './../utils/StockChart';

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);

    useEffect(() => {
        fetchStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);

    const fetchStock = () => {
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(`${API_URL}query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchInput}&outputsize=compact&apikey=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                for (var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                }
                setStockChartXValues(stockChartXValuesFunction);
                setStockChartYValues(stockChartYValuesFunction);
            });
    };

    const handleSearchStock = (e) => {
        setSearchInput(document.getElementById('searchInput').value);
        e.preventDefault();
    }

    return (
        <div>
            <SearchBar
                searchInput={searchInput}
                handleSearchStock={handleSearchStock}
                fetchStock={fetchStock}
            />
            <StockChart searchInput={searchInput} stockChartXValues={stockChartXValues} stockChartYValues={stockChartYValues} />
        </div>
    );

};

export default Home;