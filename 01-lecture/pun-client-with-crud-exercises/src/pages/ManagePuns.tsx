export const ManagePuns = () => {
  // Exercise 1: Create a state variable to store the puns
  // Exercise 2: Create a useEffect hook to fetch the puns from the API
  // Exercise 3: Display the puns in the page
  // Exercise 4: Create a function to delete a pun, and call it when the delete link is clicked
  // Exercise 5: Add a link to the UpdatePun page, passing the pun id as a parameter


  return (
    <div>
      <h2>Manage Puns</h2>

      <section id="pun-list">
        {
            <article className="list-group-item">
              <section>
                <p>Some content...</p>
                <p className='date'> - yyyy-mm-dd hh:mm</p>
              </section>
              

              <section>
                Update-link | Delete-link
              </section>
            </article>
        }
      </section>
    </div>
  )
}
