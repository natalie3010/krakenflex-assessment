# Back End - Site Outages

### Requirements

1. Retrieves all outages from the `GET /outages` endpoint
2. Retrieves information from the `GET /site-info/{siteId}` endpoint for the site with the ID `norwich-pear-tree`
3. Filters out any outages that began before `2022-01-01T00:00:00.000Z` or don't have an ID that is in the list of devices in the site information
4. For the remaining outages, it should attach the display name of the device in the site information to each appropriate outage
5. Sends this list of outages to `POST /site-outages/{siteId}` for the site with the ID `norwich-pear-tree`
* A suite of appropriate unit tests

### Solution

This program is likely to be a small part of a much larger program that could be used to monitor and collect outages for a large amount of sites. I have tried to structure my code into reusable functions that could be called for different sites and singularly if only a small part of the functionality is required. 

If I were to develop my solution further, I would break the functions down further to increase reusability. I would also have accounted for more potential errors by wrapping functions in try catch blocks, with the error being returned if a 500 status code was returned. 

I would have implemented part 4. Due to this, the payload is incorrect and therefore the post request is not successfully sending. I have however tested the post method, which runs successfully when the correct payload is hardcoded in. 

I would have also implemented more rigorous testing, ensuring API calls are returning the correct number of calls and the correct data.

### Running the program

1. Fork and clone the repo
2. Install all dependencies using: npm install
3. Run the unit tests using: npm test
4. Ensure there is a valid API key to run the program. 
5. Run the program using: npm start




