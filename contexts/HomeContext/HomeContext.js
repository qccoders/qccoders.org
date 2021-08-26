import { createContext, useMemo, useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import { Alert } from 'evergreen-ui'

export const HomeContext = createContext()

export const HomeContextProvider = ({ children }) => {
  const [email, setEmail] = useState('')

  const isEmailValid = useMemo(() => isEmail(email), [email])

  return (
    <HomeContext.Provider value={{ email, setEmail, isEmailValid }}>
      {children}
    </HomeContext.Provider>
  )
}
