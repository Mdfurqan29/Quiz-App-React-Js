import './Header.css'

const Header = ({className})=>{
    return(<div className={className}>
        <div className='pra'> 
            <div>
            <h1 className='logo'>Logo</h1>
            </div>
            <div className='child2'>
                <div className='inputPra'>
                <input type="text" className='input' />
                </div>
                <a href="">About</a>
                <a href="">Home</a>
            </div>
        </div>

    </div>

    )

}
export default Header;