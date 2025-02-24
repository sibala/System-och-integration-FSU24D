export const UpdatePun = () => {
  // Exercise 1: Create a state variable to store the pun
  // Exercise 2: Create a useEffect hook to fetch the pun from the API, using the id from the URL
  // Exercise 3: Display the pun contents in the form
  // Exercise 4: Handle changes in the form
  // Exercise 5: Create a function to update the pun, and call it when the form is submitted
  // Exercise 6: Redirect to the ManagePuns page after updating the pun
  // Exercise 7: Add a back link to the ManagePuns page

  return (
    <div>
      <h2>Update Pun</h2>

      <form>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={'Some content...'} 
        />

        <p>Created at: yyyy-mm-dd hh:mm</p>

        <button>Update</button>

        &#x2190; back-link
      </form>
    </div>
  )
}
