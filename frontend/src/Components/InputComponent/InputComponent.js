import { useState } from "react";

function InputComponent({demoLocation, setLocation, setCoordinates}) {
  const [formData, setFormData] = useState({
    project:"",
    latmin: "",
    lonmin: "",
    latmax: "",
    lonmax: "",
    flood_date: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCoordinates([((formData.latmin+formData.latmax)/2), ((formData.lonmin+formData.lonmax)/2)])
    // Make API call with formData using POST request
    console.log(formData)
    const response = await fetch(`${API_URL}/map`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    console.log("response : ",response)
    // Handle response and show video component
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 rounded-md p-6 w-full lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Real-time flood risk analysis</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <label htmlFor="project">Project Name:</label>
          <input
            type="text"
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="minLat">Minimum Latitude:</label>
          <input
            type="text"
            id="latmin"
            name="latmin"
            value={formData.latmin}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="minLon">Minimum Longitude:</label>
          <input
            type="text"
            id="lonmin"
            name="lonmin"
            value={formData.lonmin}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="latmax">Maximum Latitude:</label>
          <input
            type="text"
            id="latmax"
            name="latmax"
            value={formData.latmax}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="lonmax">Maximum Longitude:</label>
          <input
            type="text"
            id="lonmax"
            name="lonmax"
            value={formData.lonmax}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="flood_date">Flood Date:</label>
          <input
            type="date"
            id="flood_date"
            name="flood_date"
            value={formData.flood_date}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        )}
        {isSubmitted && (
          <div className="mt-4">
            <video src="your-video-src" controls></video>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputComponent;
