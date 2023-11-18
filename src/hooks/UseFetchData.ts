import { apartmentProps } from "@/types/type";
import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
    const [state, setState] = useState<apartmentProps[] | undefined>();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (await fetch(url)).json();

            setState(data);
        };

        dataFetch();
    }, [url]);

    return { data: state };
};
