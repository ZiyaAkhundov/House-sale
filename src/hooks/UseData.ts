import { apartmentProps } from '@/types/type';
import { create } from 'zustand';

interface InputStore {
    data: apartmentProps[];
    setData:(data:apartmentProps[])=>void
}

const useData = create<InputStore>((set) => ({
    data: [],
    setData: (data: apartmentProps[]) => set({ data: data })
}));


export default useData;