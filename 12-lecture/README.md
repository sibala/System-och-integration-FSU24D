# Exercise

## Get started

### 1. Programmable Search Engine

Steps to create a custom Search Enginge: https://programmablesearchengine.google.com/controlpanel/all
- Choose the whole web or specific website(s)
- Try it out through the public address, if it works as intended. Ajust accordingly.
- Retrieve the key for the search engine (needed for the API requests)


### 2. Google Cloud API Dashboard
Steps to create a new project and activate the Custom Search API: https://console.cloud.google.com/welcome
- Create a new project
- Choose the new project, and from there enable Custom Search API: APIs & Services->Custom Search 
- Create API credentials: Credentials->Create Credentials->API key (needed for the API requests)


### 3. Start koding
These steps can be found in the docs: https://developers.google.com/custom-search/v1/using_rest
- Create a GET request to "https://www.googleapis.com/customsearch/v1", with the following obligatory parameters
  - q: search query
  - key: API key
  - cx: Search Enginge LEy
- Present the search result with text, image and a link to the specific website page, for every item
- Explore what more you can do with the search API, through the optional parameters: https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list

<br/>
NOTE! You have only 100 requests per day on the free tier. Use them wisely.