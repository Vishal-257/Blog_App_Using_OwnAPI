# Blog_App_Using_OwnAPI
In this app, the user can create, edit or delete a blog. 
This app includes two server side files server.js (server running on one port) and index.js (Our OWN API running on another port).
Both the files run on different ports and server.js calls the API running on another port.
Example: const result = await axios.get("localhost:3000",param)
The API running on another port responds with the required data and the server.js renders that data on index.ejs.
