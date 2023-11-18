import LogoSvg from '../../assets/logo-5b420a7c.svg'

const Logo = () => {
    return ( 
        <div className="md:min-w-[60] md:mx-3">
            <a href="/">
                <img src={LogoSvg} alt="Logo"
                className='block cursor-pointer rounded aspect-auto'/>
            </a>
        </div>
     );
}
 
export default Logo;