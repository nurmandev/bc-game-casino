export const Data = [
    {
      question:"Self-Exclusion" ,
      answer: (
  <div>
  <div>
    <h1></h1>
  
    <p>
      Are you seeking a break from   BC.CO  ? Initiate the automated   self-exclusion   process by establishing a limit, and you will be temporarily barred from accessing your account for the selected period.
    </p>
  
    <p>
      Please be aware that during this time, you will not have access to any products on the website, and any remaining balances will also be unavailable.
    </p>
  
    <p>
      You will receive an email to confirm your request.
    </p>
  
    <h2>Choose the Self-Exclusion Period</h2>
  
    <label for="exclusion-period" className="p-2 ">Select the period you would like to self-exclude:</label>
    <select id="exclusion-period" name="exclusion-period" className="bg-[#292D2E] p-2 m-1 rounded ">
      <option value="1-week">1 Week</option>
      <option value="1-month">1 Month</option>
      <option value="3-months">3 Months</option>
      <option value="6-months">6 Months</option>
      <option value="1-year">1 Year</option>
    </select>
{/* 
    <div className="flex items-center justify-between w-40 h-10 px-4 bg-[#212529] text-white text-sm font-medium rounded-md border border-[#2d3133]">
  <span>1 Month</span>
  <span className="text-gray-400">▼</span>
</div> */}

  
   
    <label className="flex items-center m-2 ">
      <input type="checkbox" name="self-exclusion-confirm" required className="h-4 w-4 m-1 rounded" />
      <p>
      By requesting self-exclusion, I   acknowledge the <samp className="text-green-500">rules of self-exclusion</samp>    and take full responsibility.
    </p>
  
    </label>
  
  
    
  </div>
  
    <button class="bg-gradient-to-r from-green-500 to-yellow-200 text-black font-bold py-2 px-10 rounded-md shadow-lg  transition transform active:scale-95">
    Request Self-exclusion
  </button>
  
  
  </div>
      ),
    },
  
  ]