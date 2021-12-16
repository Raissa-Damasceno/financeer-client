import Plot from 'react-plotly.js';


const StockChart = ({ searchInput, stockChartXValues, stockChartYValues }) => {

    return (
        <div>
            <Plot
                data={[
                    {
                        x: stockChartXValues,
                        y: stockChartYValues,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'red'},
                        line: {color: '#17BECF'},
                    }
                ]}
                layout={{
                    width: 720,
                    height: 440,
                    title: searchInput,
                    yaxis: {fixedrange: false, autorange: true},
                    xaxis: {
                        fixedrange: true,
                        rangeselector: {buttons: [
                            {
                                count: 1,
                                label: '1d',
                                step: 'day',
                                stepmode: 'backward'
                            },
                            {
                                count: 5,
                                label: '5d',
                                step: 'day',
                                stepmode: 'backward'
                            },
                            {
                              count: 1,
                              label: '1m',
                              step: 'month',
                              stepmode: 'backward'
                            },
                            {
                              count: 3,
                              label: '3m',
                              step: 'month',
                              stepmode: 'backward'
                            },
                            {step: 'all'}
                          ]},
                    },
                }}
                config={
                    {displayModeBar: false,}
                }
            />
        </div>
    );
};

export default StockChart;