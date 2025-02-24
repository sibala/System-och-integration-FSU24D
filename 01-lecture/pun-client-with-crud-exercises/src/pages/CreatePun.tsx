export const CreatePun = () => {
  // Exercise 1: Create a state variable to store the pun content
  // Exercise 2: Handle changes in the form
  // Exercise 3: Create a function to create the pun, and call it when the form is submitted
  // Exercise 4: Redirect to the ManagePuns page after creating the pun
  // Exercise 5: Add a back link to the ManagePuns page 
  

  return (
    <div>
      <h2>Create Pun</h2>

      <form>
        <textarea 
          name="" 
          id="" 
          cols={30} 
          rows={10} 
          value={'Some content...'} 
        />

        <button>Create</button>

        &#x2190; back-link
      </form>
    </div>
  )
}
