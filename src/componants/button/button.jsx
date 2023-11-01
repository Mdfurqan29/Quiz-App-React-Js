import './button.css'

const Button = ({lable,onClick,className})=>{
return (<div>
<button className={className} onClick={onClick}>{lable ?? "None Of this"}</button>

</div>

)

}
export default Button;