import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type UserDropdownProps = {
  username: string;
  children: React.ReactNode;
}

const UserDropdown = ({ username, children }: UserDropdownProps) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target !== popoverRef.current) {
        setOpen(false)
      }
    }

    setTimeout(() => {
      document.body.addEventListener('click', handleClickOutside);
    }, 0);

    return (() => {
      document.body.removeEventListener('click', handleClickOutside);
    })
  }, [open])

  const handleClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <div className='relative'>
      <button onClick={handleClick} className="flex gap-1 items-center">
        <span className="text-h text-lg font-semibold">{ username }</span>
        <ChevronDown /> 
      </button>
      {open && (
        <div className='absolute top-10 right-0 z-30' ref={popoverRef}>
          <ul 
            style={{boxShadow:'0px 4px 14px 0px rgba(0, 0, 0, 0.10)'}}
            role="menu" 
            className='bg-white rounded-[8px] py-2 min-w-[170px]'
          >
            { children }
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserDropdown;
