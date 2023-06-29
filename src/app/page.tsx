'use client'


import { Modal } from "@/components/Modal";
import { Photoitem } from "@/components/photoItem";
import { photoLIst } from "@/data/photoList";
import { useState } from "react";

 function Page() {

const [openModal, setOpenModal] = useState(false)
const [modalImage, setModalImage] = useState('')


const handleModal = (id: number)=> {

const photo = photoLIst.find(e => e.id === id)
if (photo) {
  setModalImage(photo.url)
  setOpenModal(true)
}
}

const closeModal = ()=> {
  setOpenModal(false)
} 

return (
    <div className="bg-zinc-900 0 min-h-screen w-screen">

      <h1 className=" text-center py-8 text-white text-4xl font-bold">Painzinho</h1>
      <section className="gap-4 px-4 grid grid-cols-1 md:grid-cols-2  Container max-w-5xl mx-auto">
      {photoLIst.map(item=>(
        <div>
        <Photoitem
        photo = {item}
        onClick={() => handleModal(item.id)}
        />
        </div>
  ))}
      </section>
        {openModal && 
        <Modal image = {modalImage} closeModal = {closeModal}/>}
      
    </div>
  )
}

export default Page;