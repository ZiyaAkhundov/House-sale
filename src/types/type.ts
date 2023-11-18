export type SelectOption = {
    label: string
    value:  number
}

export type apartmentProps = {
    id: number;
    imageURL: string;
    floor: number;
    total_floors: number;
    area: number;
    rooms: number;
    price: number;
    address: string;
    subway_station: {
        id: number;
        name: string;
        distance_minute: number;
    };
    createdAt: string;
}

export type FilteredValueProps = {
    minPrice: number | null;
    maxPrice: number | null;
    minFloor: number | null;
    maxFloor: number | null;
    selectValue: SelectOption[];
    funcType: boolean;
};