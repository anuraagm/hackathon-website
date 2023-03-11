function DetailsComponent({location, setLocation}) {
    return(
        <div className="DetailsComponent col-span-1 m-6">
            <h1 className="text-5xl text-blue-800">Flood Risk Analysis</h1>
            <p className="text-sm text-gray-800 mt-6">
                This project aims to show the geological impacts of flooding events observed across the globe.
                In this endeavour, we have chosen 5 locations, namely: Palamas, Chennai, Assam, Pakistan and Germany. 
                You can proceed to click on any of the location buttons below and observe the extent of the flood 
                damage that was observed in these areas during such catastrophic flooding events. Further, you can 
                have a look at the video below to observe how sattelite imaging and related weather information can 
                be used to observe and image the nature and extent of flooding damage that occured in your selected 
                area.
            </p>

            
            <div className="inline-flex rounded-md shadow-sm mt-12" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-100 bg-transparent 
                border border-gray-300 rounded-l-lg hover:bg-gray-700 hover:text-black focus:z-10 focus:ring-2 
                focus:ring-gray-500 focus:bg-gray-200 focus:text-black dark:border-black dark:text-black 
                dark:hover:text-black dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={()=>setLocation('Palamas')}>
                    Palamas
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-100 bg-transparent 
                border-t border-b border-gray-300 hover:bg-gray-700 hover:text-black focus:z-10 focus:ring-2 
                focus:ring-gray-500 focus:bg-gray-200 focus:text-black dark:border-black dark:text-black dark:hover:text-black 
                dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={()=>setLocation('Chennai')}>
                    Chennai
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-100 bg-transparent 
                border border-gray-300 rounded-r-md hover:bg-gray-700 hover:text-black focus:z-10 focus:ring-2 
                focus:ring-gray-500 focus:bg-gray-200 focus:text-black dark:border-black dark:text-black 
                dark:hover:text-black dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={()=>setLocation('Assam')}>
                    Assam
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-100 bg-transparent 
                border border-gray-300 rounded-r-md hover:bg-gray-700 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 
                focus:bg-gray-200 focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-gray-700 
                dark:focus:bg-gray-700" onClick={()=>setLocation('Pakistan')}>
                    Pakistan
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-100 bg-transparent border border-gray300 
                rounded-r-md hover:bg-gray-700 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-200 
                focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-gray-700 
                dark:focus:bg-gray-700" onClick={()=>setLocation('Germany')}>
                    Germany
                </button>
            </div>
            <div className="mt-8">
                <video className="w-full" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            

        </div>
    )
}

export default DetailsComponent;

