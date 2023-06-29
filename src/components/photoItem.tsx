import { Photo } from "@/types/Photo";


type Props = {
photo: Photo;
onClick: () => void;
}


export const Photoitem = ({photo, onClick}: Props) =>{
    return (
        <div onClick={onClick} className=" hover:opacity-80 cursor-pointer">
            <img src={`/assets/${photo.url}` }alt='Foto'/>
        </div>
    )
}