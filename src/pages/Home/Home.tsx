import useMessage from "antd/es/message/useMessage";
import React from 'react'
import { Button, message } from 'antd';
import { NavLink } from "react-router-dom";
import bigImage from "../../assets/kub-static.svg"
import Teacher from "../../components/Teacher/Teacher";


const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col my-20'>
      <div className="w-full flex justify-center aligh-items">
        <div className="w-full flex justify-center aligh-items gap-x-45">
          <div className='flex flex-col'>
            <h1 className='text-8xl font-bold'>IT-куб</h1>
            <p className='text-xs my-6 font-thin max-w-[476px]'>Центры цифрового образования детей «IT-куб» создаются и функционируют на базе образовательных организаций высшего, общего, среднего профессионального и дополнительного образования.</p>
            <div className="w-full flex items-center gap-x-5">
              <NavLink to='/courses'><Button className='font-medium' variant='solid' color='primary' size='large'>Записаться</Button></NavLink>
              <Button onClick={() => message.error('Раздел находится в разработке...')} className='font-medium'>Подробнее</Button>
            </div>
          </div>
          <div>
            <img src={bigImage} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col m-auto my-30">
        <div className="flex justify-between ">
          <h1 className="text-xl font-semibold ">Наши преподаватели</h1>
          <Button onClick={() => message.error('Раздел находится в разработке...')} size="small" color="primary" variant="solid">Подробнее</Button>
        </div>

        <div className="flex gap-x-5 m-auto  justify-between my-20">

          <Teacher name={'Иван Иванов'} imageUrl={"https://randomuser.me/api/portraits/women/9.jpg"} language={"C++"} />
          <Teacher name={'Марина Михайловна'} imageUrl={"https://randomuser.me/api/portraits/men/17.jpg"} language={"WEB3/HTML/CSS3"} />
          <Teacher name={'Магомед Магомедов'} imageUrl={"https://randomuser.me/api/portraits/men/27.jpg"} language={'Java'} />
          <Teacher name={'Виктория Сергеевна'} imageUrl={"https://randomuser.me/api/portraits/women/17.jpg"} language={'Scratch'} />


        </div>
      </div>

    </div>
  )
}

export default Home
