import './MainButton.css'

export default function MainButton({children, ...atrs}) {

  return(
    <button className='button' {...atrs}>
      {children}
    </button>
  )
}
