import Card from './assets/components/Card/Card.jsx'
import './App.css'
import themeBlue from './assets/components/Card/themeBlue.module.css'
import themeGreen from './assets/components/Card/themeGreen.module.css'
import themeRed from './assets/components/Card/themeRed.module.css'
import themeBlack from './assets/components/Card/themeBlack.module.css'

function App() {
  console.log('a');
  return (
    <div className='content'>
      <div className='cards'>
        <Card price={300} mb={10} theme={themeBlue} />
        <Card price={450} mb={50}theme={themeGreen} />
        <Card price={550} mb={100}theme={themeRed} />
        <Card price={1000} mb={200}theme={themeBlack} />
      </div> 
    </div>
  )
}

export default App
