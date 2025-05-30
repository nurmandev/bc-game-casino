import React, { useState, useEffect } from 'react';

import tropy from './../../public/trophy-B3u8sNrg.webp';

// leave
import left from './../../public/grass-CpiRLZv-.webp'
import right from './../../public/grass-CpiRLZv-.webp'

//active
import active from './../../public/tag-01-01.png'
import spinner from './../../public/spinner.png'


// last champion
import winner from './../../public/winner-2Gw-m0Lk-01-01.png'
import crown from './../../public/crown-B_dBh7X7.webp'
import frog from './../../public/head3_l.png'


// medal img
import medal1 from './../../public/gold-CfQ8SjyD.webp'
import medal2 from './../../public/silver-DTgn4-xw.webp'
import medal3 from './../../public/copper-DgadfozE.webp'
// import Spinner from '../components/Spinner';


// arrow icon
import { RiArrowRightSLine } from "react-icons/ri";

const WagerContest = () => {
  const [contestData, setContestData] = useState([]);
  const [prizePool] = useState(1374809.25); // Mocked prize pool
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 7,
    minutes: 17,
    seconds: 15,
  });

  // Fetch data and initialize state
  useEffect(() => {
    const mockData = [
      {
        rank: 1,
        player: 'Hidden',
        wager: '₹2,35,596.75K',
        prize: '₹6,41,818.73 ',
        percent:'(50%)'
      },
      {
        rank: 2,
        player: 'Jiuvndbirsac',
        wager: '₹1,46,844.84K',
        prize: '₹3,20,909.36 ',
         percent:'(25%)'
      },
      {
        rank: 3,
        player: 'SalsaKing',
        wager: '₹1,19,314.64K',
        prize: '₹1,54,036.49 ',
         percent:'(12%)'
      },
      {
        rank: 4,
        player: 'Hidden',
        wager: '₹8,82,12,176.35',
        prize: '₹77,018.24 ',
         percent:'(6%)'
      },
      {
        rank: 5,
        player: 'Fwwnicmhkqac',
        wager: '₹7,75,65,660.66',
        prize: '₹38,509.12 ',
         percent:'(3%)'
      },
      {
        rank: 6,
        player: 'Fpoaqdyftsac',
        wager: '₹6,46,95,790.86',
        prize: '₹19,254.56 ',
         percent:'(1.5%)'
      },
      {
        rank: 7,
        player: 'Zxqvbnm',
        wager: '₹5,00,00,000.00',
        prize: '₹10,000.00 ',
         percent:'(1%)'
      },
    ];
    setContestData(mockData);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0
      ) {
        clearInterval(intervalId);
      } else {
        const seconds = timeRemaining.seconds - 1;
        const minutes = timeRemaining.minutes - (seconds < 0 ? 1 : 0);
        const hours = timeRemaining.hours - (minutes < 0 ? 1 : 0);
        setTimeRemaining({
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  return (
    <>
      
<div className="bg-[#232626] m-10 flex gap-4 items-stretch">
  {/* Daily Contest Section */}
<div className="flex items-center w-[50%] rounded p-5 bg-[linear-gradient(to_right,_rgba(36,_238,_137,_0.2)_0%,_rgb(50,_55,_56)_60%)]">
  

<div className="flex items-center justify-center w-full p-4">
  {/* Trophy on the left side */}
  <img src={tropy} alt="Trophy" className="w-32 h-32 mr-4" />
  
  {/* Content on the right side */}
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center">
      <img src={left} alt="Left Decoration" className="mr-2" />
      <h2 className="text-2xl font-bold text-[#24EE89]">Daily Contest</h2>
      <img src={right} alt="Right Decoration" className="transform -scale-x-100 ml-2" />
    </div>
    <p className="text-lg text-gray-400 mt-2">Contest Prize Pool</p>
    <p className="text-xl font-bold text-green-400 mt-1 bg-[#232626] p-3 rounded-lg ">₹{prizePool.toLocaleString('en-IN')}</p>
  </div>
</div>



</div>


  {/* Time Remaining Section */}
<div className="bg-[#323738] p-2 rounded-md w-[25%] flex flex-col items-center">
  
  
  <div className='flex flex-col items-center mt-5'>
  <div>
  <h2 className="text-xl font-bold text-[#24EE89] mt-4">Time Remaining</h2>
  </div>
  <div className="flex items-center text-white mt-4">
    
    {/* Hours */}
    <div className="bg-[#232626] flex flex-col items-center p-2 w-[60px] rounded-lg">
      <p className="text-2xl font-bold">{timeRemaining.hours}</p>
      <p className="text-sm text-[#AEB9BC]">Hours</p>
    </div>

    <span className="font-bold text-xl mx-2 flex items-center text-[#ABB6B9]">:</span>

    {/* Minutes */}
    <div className="bg-[#232626] flex flex-col items-center p-2 w-[60px] rounded-lg">
      <p className="text-2xl font-bold">{timeRemaining.minutes}</p>
      <p className="text-sm text-[#AEB9BC]">Minutes</p>
    </div>

    <span className="font-bold text-xl mx-2 flex items-center text-[#ABB6B9]">:</span>

    {/* Seconds */}
    <div className="bg-[#232626] flex flex-col items-center p-2 w-[60px] rounded-lg">
      <p className="text-2xl font-bold">{timeRemaining.seconds}</p>
      <p className="text-sm text-[#AEB9BC]">Seconds</p>
    </div>

  </div>

  </div>

  
</div>


  {/* Last Champion Section */}
  <div className="bg-[#323738] w-[25%] p-5 rounded-md relative flex flex-col justify-between">
    {/* Winner Image - Top Left */}
    <img 
      src={winner} 
      alt="Winner" 
      className="absolute top-0 left-0 w-12 h-12 border-[#24EE89]" 
      
    />

  
    
    {/* Question Mark Circle - Top Right */}
    <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#232626] text-white font-bold">
      ?
    </div>
    
    {/* Last Champion Content */}
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-xl font-bold text-[#24EE89]">Last Champion</h2>
      <div className="flex items-center">
        <div>
          <img src={crown} alt="Crown" className="w-16 h-6" />
          <img 
            src={frog} 
            alt="Champion" 
            className="w-16 h-16 rounded-full object-cover border-2 border-[#24EE89]" 
          />
        </div>
        <div className="ml-2 mt-4">
          <p className="text-sm font-bold text-white">Hidden</p>
          <p className="text-sm text-gray-400">Profit (50%)</p>
          <p className="text-sm font-bold text-green-400">₹1,24,685.12</p>
        </div>
      </div>
    </div>
  </div>
</div>


     

      {/* Contest Table */}
      <div className="container mx-auto p-4 rounded ">
        <div className="overflow-x-auto bg-[#323738] rounded">
        <div className="flex items-center justify-between mt-4 relative">
                <div className="relative">
                    <img src={active} alt="Active" className="w-full h-9" />
                    <div className="absolute left-1 top-1  flex items-center justify-center gap-1 text-black font-bold">
                        {/* <Spinner /> */}
                        <img src={spinner} alt="Loading..." className="w-3 h-3 animate-spin" />
                        <div>Active</div>
                    </div>
        </div>
        


          <p className="text-sm text-white font-bold">03/12/2024 - 04/12/2024</p>
          <button className="bg-[#495354] font-bold text-white px-4 py-2 rounded-md mr-4 flex items-center ">
            History
            <span className="font-bold text-xl  ml-1  text-[#ABB6B9]"><RiArrowRightSLine/></span>
          </button>
        </div>
        <hr className='border-gray-600 mt-2' />
 <table className="min-w-full bg-[#323738] ">
  <thead>
    <tr className="bg-[#323738] text-[#ABB6B9] ">
      <th className="py-2 px-4 ">#</th>
      <th className="py-2 px-4 ">Player</th>
      <th className="py-2 px-4 ">Wager</th>
      <th className="py-2 px-4 ">Prize</th>
    </tr>
  </thead>
  <tbody>
      {contestData.map((contestant, index) => (
        <tr
          key={contestant.rank}
          className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-[#3A4142] text-[#ABB6B9]' : 'bg-[#323738] text-white'}`}
        >
          <td className="py-2 px-4 text-center text-[#ABB6B9]">
            {contestant.rank <= 3 ? (
              <img
                src={contestant.rank === 1 ? medal1 : contestant.rank === 2 ? medal2 : medal3}
                alt="Medal"
                className="w-6 h-6 inline-block" // Inline block to keep it next to the rank number
              />
            ) : (
              contestant.rank // Show rank number for ranks greater than 3
            )}
            {/* Display rank with a space after image */}
          </td>
          <td className="py-2 px-4 text-center">{contestant.player}</td>
          <td className="py-2 px-4 text-center text-green-500">{contestant.wager}</td>
          <td className="py-2 px-4 text-center text-green-500">{contestant.prize}
           <span className='text-[#ABB6B9]'>{contestant.percent}</span> 
          </td>
        </tr>
      ))}
    </tbody>
</table>

        </div>
      </div>
    </>
  );
};

export default WagerContest;















