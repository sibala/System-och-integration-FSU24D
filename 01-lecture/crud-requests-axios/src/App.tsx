import './App.css'
import { CreatePun } from './components/CreatePun'
import { DeletePun } from './components/DeletePun'
import { GetAllPuns } from './components/GetAllPuns'
import { GetSpecificPun } from './components/GetSpecificPun'
import { UpdatePun } from './components/UpdatePun'

function App() {
  return (
    <>
      <GetAllPuns />
      <GetSpecificPun />
      <CreatePun />
      <UpdatePun />
      <DeletePun />
    </>
  )
}

export default App
