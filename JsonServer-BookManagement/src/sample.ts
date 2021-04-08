const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/Books", configObj);
