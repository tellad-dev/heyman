import React, { ReactNode } from 'react'
type TProps = {
  children: ReactNode
}
const DefaultLayout: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          padding: 24,
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default DefaultLayout
