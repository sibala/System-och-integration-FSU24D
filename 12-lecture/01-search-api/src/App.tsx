function App() {
  
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen m-10">
      <h2 className='text-3xl font-bold  mb-4'>Search API</h2>
      <section id="header" className='mb-4'>
        <form id="search-form">
          <input type="text" placeholder="search pun" className='border border-gray-400 rounded p-1'/>
          
          <button className='border border-gray-400 rounded p-1' >Search</button>
        </form>
      </section>


      <section id="results" className='mt-4 w-2/3'>
        <h2 className='text-2xl font-bold mb-4'>Results</h2>
        
          <div className='border border-gray-400 rounded p-2 mb-2 flex flex-nowrap'>
            <section className='flex-shrink-0 flex-initial mr-2 p-3'>
              {/* <img src={'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg'} className='w-full h-48 object-cover mb-2' /> */}
            </section>

            <section className='flex-grow flex flex-col justify-between p-3'>
              <h3 className='text-xl font-bold'>Title</h3>
              <p>Text</p>
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600"></a> */}
            </section>
          </div>
      </section>
      
    </div>
  )
}

export default App
