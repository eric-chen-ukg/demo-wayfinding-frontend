import Image from 'next/image';
import { Inter } from 'next/font/google';
import ericDimensionsHome from 'assets/images/eric-dimensions-home.png'
import Chatbox from '@/components/chatbox/Chatbox';

export default function Home() {
  return (
    <div
      className='w-full h-full'>
      <Image
        className='w-full h-full object-cover overflow-y-hidden hidden md:block'
        src={ericDimensionsHome} alt="user-dimensions-home"></Image>
      <Chatbox />
    </div>
  )
}
