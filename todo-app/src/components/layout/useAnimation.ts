import { useState } from "react"

interface UseAnimationProps {
  isOpen: boolean; // Состояние панели, должно быть булевым
}

const useAnimation = ({ isOpen }: UseAnimationProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const getAsideWidth = () => {
    if (windowWidth < 768) {
      return isOpen ? '150px' : '50px' // Мобильные устройства
    } else if (windowWidth < 1024) {
      return isOpen ? '200px' : '70px' // Планшеты
    } else {
      return isOpen ? '250px' : '70px' // Десктопы
    }
  }

  return {
    getAsideWidth,
    setWindowWidth
  }
}

export default useAnimation
