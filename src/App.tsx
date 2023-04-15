import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Vinicius Molina</h1>
        <h3>Fullstack developer</h3>

    <div className='main-section'>
        <section>
          <h4>Skills</h4>
          <div className='post-it yellow'>
            <div>
              <ul>
                <li>Javascript/Typescript</li>
                <li>React</li>

              </ul>
            </div>
            <div className='more'>
              +
            </div>

          </div>
        </section>

        <section>
          <h4>Social Media</h4>
          <div className='post-it blue'>
          <div>
              Linkedin
            </div>
            <div className='more'>
              +
            </div>
          </div>
        </section>

        <section>
          <h4>Sobre mim</h4>
          <div className='post-it red'>
          <div>
              Linkedin
            </div>
            <div className='more'>
              +
            </div>
            
            </div>
          
        </section>
      </div>
    </div>
  )
}

export default App
