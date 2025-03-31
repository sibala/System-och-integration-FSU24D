import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"


interface IItem {
  displayLink: string; 
  formattedUrl: string; 
  htmlFormattedUrl: string; 
  htmlSnippet: string; 
  htmlTitle: string; 
  kind: string; 
  link: string;
  snippet: string, 
  pagemap: {
    cse_thumbnail?: IItemThumbnail[]
  }; 
  title: string; 
}

interface IItemThumbnail {
  height: string,
  src:  string,
  width: string,
}


function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [items, setItems] = useState<IItem[] | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          q: searchText,
          key: '***',
          cx: '***'
        }
      })
      console.log(response.data)


      

      if (searchText.length <= 3) {
        throw new Error('Must type more than 3 chars')
      }
      if (response.data.items === undefined) {
        throw new Error('No search results')
      }
      setItems(response.data.items)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
        setError(error.message)
      }
      console.log(error)
    }
  }

  
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen m-10">
      <h2 className='text-3xl font-bold  mb-4'>Search API</h2>
      <section id="header" className='mb-4'>
        <form id="search-form">
          <input 
            type="text" 
            placeholder="search" 
            className='border border-gray-400 rounded p-1' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setSearchText(e.target.value)}}
          />
          
          <button className='border border-gray-400 rounded p-1' onClick={handleSearch}>Search</button>
        </form>
      </section>


        <section id="results" className='mt-4 w-2/3'>
          <h2 className='text-2xl font-bold mb-4'>Results</h2>

          { error && <p>{error}</p>}
          
          { items && items.map((item) => (
              <div key={item.title} className='border border-gray-400 rounded p-2 mb-2 flex flex-nowrap'>
                <section className='flex-shrink-0 flex-initial mr-2 p-3'>
                  {/*  */}

                  { item.pagemap.cse_thumbnail && (
                    <img src={item.pagemap.cse_thumbnail[0].src} className='w-full h-48 object-cover mb-2' />
                  )}

                  { !item.pagemap.cse_thumbnail && (
                    <img src={'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg'} className='w-full h-48 object-cover mb-2' />
                  )}
                </section>

                <section className='flex-grow flex flex-col justify-between p-3'>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p>{item.snippet}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">To Product -&gt;</a>
                </section>
              </div>
            ))
          }

    </section>

      {/* May embedded the serach enginge directly- But notice the implementation is not that customizable */}
      {/* <script async src="https://cse.google.com/cse.js?cx=20a33893e316a4bc5"></script>
      <div className="gcse-search"></div> */}
      
    </div>
  )
}

export default App
