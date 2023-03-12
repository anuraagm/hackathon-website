import { useState } from "react";

function InputComponent() {
  const [formData, setFormData] = useState({
    minLat: "",
    minLon: "",
    maxLat: "",
    maxLon: "",
    startDate: "",
    endDate: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make API call with formData using POST request
    const response = await fetch("your-api-url", {
      method: "POST",
      body: JSON.stringify(formData)
    });
    // Handle response and show video component
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 rounded-md p-6 w-full lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Real-time flood risk analysis</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <label htmlFor="minLat">Minimum Latitude:</label>
          <input
            type="text"
            id="minLat"
            name="minLat"
            value={formData.minLat}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="minLon">Minimum Longitude:</label>
          <input
            type="text"
            id="minLon"
            name="minLon"
            value={formData.minLon}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="maxLat">Maximum Latitude:</label>
          <input
            type="text"
            id="maxLat"
            name="maxLat"
            value={formData.maxLat}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="maxLon">Maximum Longitude:</label>
          <input
            type="text"
            id="maxLon"
            name="maxLon"
            value={formData.maxLon}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="rounded-md border-gray-300 p-2"
          />
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
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
