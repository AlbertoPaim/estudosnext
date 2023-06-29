type Props = {
    image: string;
    closeModal: () => void
}


export const Modal = ({ image, closeModal}: Props) =>{
    return (
        <>
        <div onClick={closeModal} className="bg-black/90 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center cursor-pointer">
            <img src={`/assets/${image}`} alt="Foto" className="max-w-screen max-h-screen"/>
        </div>
        <div onClick={closeModal} className="fixed top-5 right-10 text-5xl md:text-9xl text-white cursor-pointer">
            x
        </div>
        </>
       
    )
}