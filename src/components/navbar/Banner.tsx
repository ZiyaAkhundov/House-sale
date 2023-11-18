import MenuItem from "./MenuItem";

const Banner = () => {
    return ( 
        <div className="px-10 justify-center hidden md:flex text-[14px]">
            <div className="flex gap-1 ">
                <MenuItem label="Seçilmişlər" onClick={() => {}} />
                <MenuItem label="Elan Yerləşdir" onClick={() => { }} />
                <MenuItem label="Log in" onClick={() => { }} />
            </div>   
        </div>
     );
}
 
export default Banner;