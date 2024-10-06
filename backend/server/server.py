from fastapi import FastAPI, Form
import sys
import os
import json
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))  # Add the parent directory to the path

from database.database import upload_to_server, read_from_server  # Import the handler functions

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
    description: str = Form(...),
    address: str = Form(...),  # Added this line to accept 'address'
    wheelchair: str = Form(...),
    hearingLoop: str = Form(...),
):
    d = {
        "name": name,
        "location": location,
        "date": date,
        "time": time,
        "description": description,
        "address": address,
        "wheelchair": wheelchair.lower() == 'true',
        "hearingLoop": hearingLoop.lower() == 'true',
    }


    # Call the function from the handlers module
    upload_to_server(d)
    print(d)

    # Content format includes: name, location, date, time, description, address

    return {"message": "Data uploaded successfully"}  # Updated response

@app.get("/return-locations/")
async def return_accessible_locations():
    data = read_from_server()
    return data  # Ensure 'description' and 'address' are included in the returned data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
