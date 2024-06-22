import "assets/styles/container.css"
import "assets/styles/all.css"
import "./style.css"

const Button = ({className, title, style}) => {
  return (
    <div className='btn-wrapper'>
        <button className={className} style={style}>
            {title}
        </button>
    </div>
  )
}

export default Button