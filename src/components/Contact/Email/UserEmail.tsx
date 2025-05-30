import * as React from 'react';
import { Body, Html, Container, Tailwind, Text, Button, Head, Heading} from "@react-email/components"

type EmailProps = {
  firstName: string,
  lastName: string,
  email: string,
  message: string
}

const UserEmail = ({firstName, lastName, email, message}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className="text-xl pt-4">Hey {firstName}</Heading>
            <Text className="text-lg font-medium text-gray-700">
              Thanks so much for reaching out through my portfolio! I really appreciate you taking the time to send a message.
            </Text>
            <Text className="text-gray-700">
              I've successfully received your inquiry and will be sure to review it soon. I usually get back to messages within 1-2 business days.
            </Text>
            <Container className='bg-gray-300 rounded-lg p-5 mx-auto'>
              <Text>Here's a quick recap of what you sent:</Text>
              <Text>Your Name: {firstName} {lastName}</Text>
              <Text>Your Email: {email}</Text>
              <Text>Your Message:</Text>
              <Text className='text-gray-700'>{message}</Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default UserEmail