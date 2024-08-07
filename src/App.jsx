import './App.css'
import ThemeComp from './ThemeComp'
import { ThemeProvider } from './ThemeProvider'

function App() {
  

  return (
    <>
      <ThemeProvider>
        <ThemeComp/>
      </ThemeProvider>
    </>
  )
}

export default App
