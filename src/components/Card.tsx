import * as React from "react"
import Metro from "../assets/Metro-c5640a2f.svg"
import Loc from "../assets/loc.svg"
import HomeLogo from "../assets/Home-4e08e4db.svg"
import Room from "../assets/Room-01a5c57e.svg"
import Square from "../assets/Square-11b0dbdc.svg"
import Man from "../assets/Man.svg"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { apartmentProps } from "@/types/type"

const CardApart: React.FC<apartmentProps> = ({ imageURL, floor, total_floors, area, rooms, price, address, subway_station,createdAt }) => {
    return (
        <div className="col-span-1 md:col-span-1">
            <Card className="h-full max-h-[500px]">
                <CardContent className="p-0 over">
                    <div className="grid grid-cols-1">
                        <div className="max-h-[250px] h-[250px] md:max-h-[300px] md:h-[300px]">
                            <img src={imageURL} alt="" className="rounded-t-sm h-full w-full object-cover"/>
                        </div>
                        <div className="flex px-5 py-2 justify-between items-center">
                            <span className="md:text-[16px] xl:text-[21px] font-bold">{price.toLocaleString('en-US')} AZN</span>
                            <span className="text-gray-500 text-[14px]">{createdAt}</span>
                        </div>
                        <div className="flex gap-2 px-5 items-center">
                            <img src={subway_station ? Metro : Loc} alt="Metro" />
                            {subway_station ?
                            <>
                                <span className="md:text-[14px] lg:text-[17px] xl:text:[20px]" title={subway_station.name}>{subway_station.name}</span>
                                <div className="flex gap-1 items-center">
                                <img src={Man} alt="Man" />
                                <span className="text-[15px] text-gray-500">{subway_station.distance_minute} dəq</span>
                                </div>
                            </>
                                :
                                <span className="font-[20px]" title={address}>{truncateAddress(address,30)}</span>
                            }
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between my-2 font-semibold">
                    <div className="flex gap-1">
                        <img src={HomeLogo} alt="Home" />
                        <span>{floor}/{total_floors}</span>
                    </div>
                    <div className="flex gap-2">
                            <img src={Room} alt="Room" />
                            <span>{rooms}</span>
                    </div>
                    <div className="flex gap-1">
                            <img src={Square} alt="Square" />
                            <span>{area}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default CardApart


const truncateAddress = (address:string, maxLength:number) => {
    if (address.length > maxLength) {
        return address.substring(0, maxLength) + '...';
    }
    return address;
};