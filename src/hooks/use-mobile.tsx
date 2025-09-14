
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Initial check based on window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Run initial check
    checkMobile()
    
    // Create a media query list to watch for changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern approach using addEventListener
    const handleChange = () => {
      checkMobile()
    }
    
    mql.addEventListener("change", handleChange)
    
    // Add a backup resize listener for browsers that don't fully support matchMedia
    window.addEventListener("resize", checkMobile)
    
    // Cleanup function to remove all listeners
    return () => {
      mql.removeEventListener("change", handleChange)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
