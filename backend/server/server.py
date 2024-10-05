from fastapi import FastAPI, Form
import sys
import os 
import json
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))  # Add the parent directory to the path

from database.database import upload_to_server  # Import the handler function
from database.database import read_from_server


app = FastAPI()

# Allow requests from your frontend's origin
origins = [
    "http://localhost:3000",  # Your React app's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# API to upload string data, calls a function in another module
@app.post("/upload-string/")
async def upload_string(
    name: str = Form(...),
    location: str = Form(...),
    date: str = Form(...),
    time: str = Form(...),
    description: str = Form(...)):

    d = {}
    d["name"] = name
    d["location"] = location
    d["date"] = date
    d["time"] = time
    d["description"] = description

    # Call the function from the handlers module
    #result = upload_to_server(content)

    upload_to_server(d)
    print(d)


    # content format should be: issue, location, date, time, description, image
    
    return "hello"
    
@app.get("/return-locations/")
async def return_accessible_locations():
    z = read_from_server()
    return z
    
    


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)