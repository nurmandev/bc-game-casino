import { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-stockcharts";

const { CanvasJSStockChart } = CanvasJSReact;

const Graphchart = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [liveData, setLiveData] = useState([
    { x: new Date("2024-02-15T10:00:00"), y: 45000 },
    { x: new Date("2024-02-15T10:30:00"), y: 45500 },
    { x: new Date("2024-02-15T11:00:00"), y: 46000 },
    { x: new Date("2024-02-15T11:30:00"), y: 45800 },
    { x: new Date("2024-02-15T12:00:00"), y: 46200 },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://canvasjs.com/data/gallery/react/btcusd2017-18.json")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((point) => ({
          x: new Date(point.date),
          y: Number(point.close),
        }));
        setHistoricalData(formattedData);
        setIsLoaded(true);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prevData) => [
        ...prevData.slice(1),
        { x: new Date(), y: Math.floor(45000 + Math.random() * 1000) },
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const historicalOptions = {
    theme: "dark2",
    subtitles: [{ text: "BTC/USD" }],
    charts: [
      {
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            
          },
        },
        axisY: {
          title: "Price (USD)",
          prefix: "$",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        data: [
          {
            type: "line",
            dataPoints: historicalData,
          },
        ],
      },
    ],
  };

  const liveOptions = {
    theme: "dark2",
    subtitles: [{ text: "Live BTC/USD" }],
    charts: [
      {
        axisX: {
          title: "Time",
          valueFormatString: "HH:mm:ss",
        },
        axisY: {
          title: "Price (USD)",
          prefix: "$",
        },
        data: [
          {
            type: "line",
            dataPoints: liveData,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      {isLoaded ? (
        <CanvasJSStockChart options={historicalOptions} />
      ) : (
        <p>Loading historical data...</p>
      )}
      <CanvasJSStockChart options={liveOptions} />
    </div>
  );
};

export default Graphchart;
