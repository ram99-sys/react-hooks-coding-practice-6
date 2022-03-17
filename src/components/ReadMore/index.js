import {useState} from 'react'
import {Container, ReactImage, Button, Text, Heading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  console.log(reactHooksDescription)
  const [message, setMessage] = useState(false)
  const showMessage = () => {
    setMessage(prevState => !prevState)
  }

  console.log(message)

  return (
    <Container>
      <Heading>React hooks</Heading>
      <p>Hooks are a new addition to react</p>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {message ? (
        <Text>{reactHooksDescription}</Text>
      ) : (
        <Text>{reactHooksDescription.slice(0, 170)}</Text>
      )}
      <Button type="button" onClick={showMessage}>
        {message ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore
