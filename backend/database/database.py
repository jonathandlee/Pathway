import json

filepath = 'database/data.json'
accessibility_filepath = 'database/accessible_locations.json'

def read_from_server():
  try:
    with open(filepath, 'r') as file:
      data = json.load(file)
      print(data)
      return data
  except Exception as e:
    print(e)
    return None

def upload_accessibility_to_server(content):



  try:
        with open(accessibility_filepath, 'r') as json_file:
            data = json.load(json_file)

        if "users" in data and isinstance(data["users"], list):
            data["users"].append(content)
        elif "users" not in data:
            data["users"] = [content]
        else:
            print("The JSON structure is not valid for appending.")
        print(data)
        with open(accessibility_filepath, 'w') as json_file:
            json.dump(data, json_file, indent=4)
        
        print("Data successfully appended.")
        return True
    
  except Exception as e:
      print(f"An error occurred: {e}")
      return False
   

def upload_to_server(content):
    filepath = 'venues.json'  # Define the file path if not already defined

    try:
        # Check if the file exists and has content
        if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
            with open(filepath, 'r') as json_file:
                data = json.load(json_file)
        else:
            # Initialize data if file doesn't exist or is empty
            data = {"inaccessibility_markers": []}

        # Ensure the key exists and is a list
        if "inaccessibility_markers" in data and isinstance(data["inaccessibility_markers"], list):
            data["inaccessibility_markers"].append(content)
        else:
            data["inaccessibility_markers"] = [content]

        with open(filepath, 'w') as json_file:
            json.dump(data, json_file, indent=4)

        print("Data successfully appended.")
        return True

    except Exception as e:
        print(f"An error occurred: {e}")
        return False
