import React from 'react'
import Logo from '../components/Logo.jsx'

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--main-bg-color)]">
      <Logo animated textPosition="column" textSize="lg" />
      <p className="mt-4 text-center max-w-sm text-[var(--secondary-text-color)] text-base opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]">
        Discover amazing products with Sella.
      </p>
    </div>
  )
}

export default SplashScreen