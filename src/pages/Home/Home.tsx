import React from 'react'
import { Button } from "antd";
function Home() {
  return (
    <div className='w-full flex flex-col'>
      <div className="w-full flex justify-center aligh-items">
        <div className="w-full flex justify-center aligh-items">
          <div className='flex flex-col'>
            <h1 className='text-8xl font-bold'>IT-куб</h1>
            <p className='text-xs my-6 font-thin max-w-[476px]'>Центры цифрового образования детей «IT-куб» создаются и функционируют на базе образовательных организаций высшего, общего, среднего профессионального и дополнительного образования.</p>
            <div className="w-full flex items-center gap-x-5">
              <Button className='font-medium' variant='solid' color='primary' size='large'>Записаться</Button>
              <Button className='font-medium' >Записаться</Button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
