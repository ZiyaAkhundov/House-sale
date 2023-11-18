import { SyntheticEvent, useState } from "react";
import { FilteredValueProps, SelectOption } from "../../types/type";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger} from "../ui/popover"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const options: SelectOption[] = [
    { label: "1 Otaqlı", value: 1 },
    { label: "2 Otaqlı", value: 2 },
    { label: "3 Otaqlı", value: 3 },
    { label: "4 Otaqlı", value: 4 },
    { label: "5 Otaqlı", value: 5 },
    { label: "5+ Otaqlı", value: 6 },

]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


type FilterProps = {
    filteredValue: (values: FilteredValueProps) => void;
};

const Filter: React.FC<FilterProps> = (props) => {
    const [selectValue, setSelectValue] = useState<SelectOption[]>([]);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [minFloor, setMinFloor] = useState<number | null>(null);
    const [maxFloor, setMaxFloor] = useState<number | null>(null);

    const handleChange = (event: SelectChangeEvent<number[]>) => {
        const selectedValues = event.target.value as number[];
        const selectedOptions = options.filter((option) =>
        selectedValues.includes(option.value)
        );
        console.log(selectedOptions)
        setSelectValue(selectedOptions);
    };
    


    const handleSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        const funcType = true;
        props.filteredValue({ minPrice: minPrice, maxPrice: maxPrice,minFloor:minFloor,maxFloor:maxFloor, selectValue, funcType });
    };

    const handleClear = () => {
        setMaxPrice(null);
        setMinPrice(null);
        setMaxFloor(null);
        setMinFloor(null);
        setSelectValue([]);
        const funcType = false;
        props.filteredValue({ minPrice: null, maxPrice: null, minFloor:minFloor, maxFloor:maxFloor, selectValue, funcType });  // Set min and max to null
    };

    return (
        <div className="h-[auto]  flex py-6 justify-center overflow-visible bg-hero-pattern bg-center bg-no-repeat bg-cover rounded-lg">
            <div className=" bg-white  backdrop-blur-2xl mx-10 py-3 bh-white rounded-md max-height-[240px] w-[900px] px-5 ">
                <form onSubmit={handleSearch}>
                    <h2 className="text-center text-[20px] font-semibold my-1 text-black">Axtarış</h2>
                    <div className="grid grid-cols-2 gap-3 mb-2 items-center">
                        <div className="col-span-2 md:col-span-1">
                            <FormControl size="small" className="w-full">
                                <InputLabel id="demo-multiple-checkbox-label" className="input-label-room">Otaq</InputLabel>
                                <Select
                                
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={selectValue.map((option) => option.value)}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selectedValues) => {
                                        const selectedOptions = options.filter((option) =>
                                            selectedValues.includes(option.value)
                                        );
                                
                                        return selectedOptions.map((option) => option.label).join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <Checkbox checked={selectValue.some((item) => item.value === option.value)} />
                                            <ListItemText primary={option.label} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-span-2 md:col-span-1 w-full">
                            <Popover>
                                <PopoverTrigger asChild className="h-[40px] w-full">
                                    <Button variant="outline">{minPrice || maxPrice ? `${minPrice ? minPrice : ''} - ${maxPrice ? maxPrice : ''}` : 'Qiymət'}</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium leading-none">Qiymət</h4>
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="min">Min</Label>
                                                <Input
                                                    id="min" type="number" placeholder="min qiymət" value={minPrice !== null ? minPrice?.toString() : ''} onChange={(e) => setMinPrice(+e.target.value)}
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="max">Max</Label>
                                                <Input
                                                    id="max" type="number" placeholder="max qiymət" value={maxPrice !== null ? maxPrice?.toString() : ''} onChange={(e) => setMaxPrice(+e.target.value)}
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="col-span-2 md:col-span-1 w-full">
                            <Label htmlFor="minFloor">Min Mərtəbə</Label>
                            <Input id="minFloor" value={minFloor !== null ? minFloor?.toString() : ''} onChange={(e) => setMinFloor(+e.target.value)} type="number" placeholder="Min Mərtəbə" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <Label htmlFor="maxFloor">Max Mərtəbə</Label>
                            <Input id="maxFloor" value={maxFloor !== null ? maxFloor?.toString() : ''} onChange={(e) => setMaxFloor(+e.target.value)} type="number" placeholder="Max Mərtəbə" />
                        </div>
                        </div>
                        
                    
                    <div className="grid grid-cols-2 gap-3">
                        <Button className="bg-blue-700 text-white col-span-1" type="submit">Axtar</Button>
                        <Button onClick={handleClear} className="bg-red-700 text-white col-span-1" type="button">Təmizlə</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Filter;
