// /lib/api.js
export const getUser = async () => {
    const token = "ouQZd5aZAenyvg-hoV1FlnM9yIf4fc-M";
    const response = await fetch(
      "https://tech-class.datacore.machinevision.global/items/user",
      {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`, // Include the authorization token in the request headers
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  
    return response.json();
  };
  