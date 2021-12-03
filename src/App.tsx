import { useCallback, useEffect, useState } from 'react'
import { get, set } from 'local-storage'
import tw from 'twin.macro'
import { styled } from 'goober'
import info, { Person } from './info'
import './App.css'

const PersonButton = styled('button')([tw`mt-10 text-primary p-3 border`])
const Title = styled('h1')([tw`text-lg mt-20`])

function App() {
  const [selected, setSelected] = useState<Person>()
  const selectUser = useCallback((user: Person) => {
    setSelected(user)
    set('selected', user)
  }, [])

  useEffect(() => {
    const prev = get<Person>('selected')
    if (prev) {
      setSelected(prev)
    }
  }, [])

  return (
    <div className="App">
      {selected && (
        <Title>
          Felicidades {selected.name}, te tocó {selected.secretSanta}
        </Title>
      )}
      {!selected && (
        <>
          <Title>
            Selecciona tu nombre, sólo tienes una oportunidad, no hagas trampa.
          </Title>
          {info.map((person: Person) => (
            <PersonButton
              className="border-2 border-green-600 inline-block"
              key={person.name}
              onClick={() => selectUser(person)}
            >
              {person.name}
            </PersonButton>
          ))}
        </>
      )}
    </div>
  )
}

export default App
