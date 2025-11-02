
import { FaAddressBook, FaAviato, FaDragon, FaFacebook, FaLinkedin, FaSearch, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa'
import pic from '../assets/picture.png'
import shop from '../assets/shop.png'
import { FaPerson, FaPersonCircleQuestion } from 'react-icons/fa6'
import { useState } from 'react'

export default function Home() {
    const [open,setopen]=useState(false)
    const menu=(
        <>
        <div className={open?`flex flex-col p-2 fixed top-20 backdrop-blur-3xl w-full shadow  z-10  transition-all duration-500 ease-in-out`:`hidden`  }>
            <button className='self-end' onClick={()=>setopen(!open)} >X</button>
             <ul className='text-xl font-bold gap-10 ' >
                        <li  onClick={()=>setopen(!open)}><a href="#top" className="hover:text-blue-400 capitalize ">Home</a></li>
                        <li  onClick={()=>setopen(!open)}><a href="#abt" className="hover:text-blue-400 capitalize">about</a></li>
                        <li  onClick={()=>setopen(!open)}><a href="#services" className="hover:text-blue-400 capitalize">services</a></li>
                        <li  onClick={()=>setopen(!open)}><a href="#pricing" className="hover:text-blue-400 capitalize">pricing</a></li>
                        <li  onClick={()=>setopen(!open)}><a href="#contact" className="hover:text-blue-400 capitalize">contact</a></li>
                        <li  onClick={()=>setopen(!open)}><a href="#" className="hover:text-blue-400 capitalize">pages</a></li>
                    </ul>
        </div>
        </>
    )

    const navbar = (
        <>
            <nav  className="navbar  flex justify-between px-8 h-[100px] items-center gap-5  shadow-sm shadow-blue-200 sticky top-0 backdrop-blur-2xl z-1">
                <div className="">
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/logo.svg"   alt="" />

                </div>
                <div className="md:flex  hidden">
                    <ul className="flex lg:gap-10 gap-3 text-[18px]">
                        <li><a href="#top" className="hover:text-blue-400 capitalize">Home</a></li>
                        <li><a href="#abt" className="hover:text-blue-400 capitalize">about</a></li>
                        <li><a href="#services" className="hover:text-blue-400 capitalize">services</a></li>
                        <li><a href="#pricing" className="hover:text-blue-400 capitalize">pricing</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 capitalize">contact</a></li>
                        <li><a href="#" className="hover:text-blue-400 capitalize">pages</a></li>
                    </ul>
                </div>
                <h1 className='md:hidden text-2xl relative' onClick={()=>setopen(!open)}  >&#9776;</h1>
                <button className="btn btn-sm md:btn-md hidden md:flex bg-blue-500 px-6 text-white font-bold py-4 h-11 rounded-full hover:drop-shadow-2xl drop-shadow-blue-500">Download CV</button>
            </nav>
        </>
    )

    const hero = (
        <>
            <section id='top' className=" mx-auto grid md:grid-cols-2    p-3 px-10">
                <div className=" flex flex-col justify-center py-5 md:w-2/3    gap-4 ">
                    <p className="text-blue-300 font-bold">
                        Hey There 👋 I am
                    </p>
                    <h1 className="font-bold text-[60px] font-serif">
                        Shoaib
                    </h1>
                    <span className="font-bold">Professional  <strong className="text-xl"> Web Developer</strong></span>
                    <p className="lg:w-2/3  font-bold text-lg">Lorem ipsum
                        praesentium distinctio iusto! Perspiciatis quas non rerum pariatur!</p>
                    <div className="flex gap-3 pr-5">
                <button className="btn btn-sm md:btn-md bg-blue-500 px-6 text-white font-bold py-4 h-11 rounded-full hover:drop-shadow-2xl drop-shadow-blue-500">Contact Me</button>
                <button className="btn btn-sm md:btn-md bg-black px-6 text-white font-bold py-4 h-11 rounded-full hover:drop-shadow-2xl drop-shadow-black">Learn More</button>
                    </div>
                </div>
                <div className="w-full lg: relative flex-col lg:flex-row flex overflow-hidden justify-end overflow-y-hidden items-baseline">
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/hero-image.png" alt="" className="relative  " />
                    <img src="https://www.svgrepo.com/show/404854/blue-circle.svg" className="w-[650px]  md:-right-15 top-14 lg:-right-10 md:top-25 absolute -z-10" alt="" />
                </div>

            </section>
        </>
    )

    const aboutme = (
        <>
            <div id='abt' className="w-full grid md:grid-cols-2  md:px-3  items-center py-30 ">
                <div className=" p-3 px-5">
                    <h3 className="text-blue-500 font-bold"> ABOUT ME </h3>
                    <h1 className="lg:text-[44px] text-[35px] font-bold">
                        Better design,<br /> better experience
                    </h1>
                    <p className="font-bold text-gray-500 text-[18px] lg:w-1/2 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                        id illum officiis est doloribus praesentium nostrum totam eveniet
                        vel labore, veniam blanditiis.
                    </p>
                </div>
                <div className=" p-3 px-5">
                    <h1 className="text-[33px] lg:text-[44px]  font-bold">
                        Connect With Me
                    </h1>
                    <p className="font-bold text-gray-500 lg:w-1/2 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                        id illum officiis est doloribus praesentium nostrum totam eveniet
                        id illum officiis est doloribus praesentium nostrum totam eveniet

                        vel labore, veniam blanditiis.
                    </p>
                    <div className='flex gap-2 pt-2 mt-5'>

                        <FaFacebook size={40} className='hover:text-blue-500 rounded-full text-gray-600' />
                        <FaTwitter size={40} className='hover:text-blue-500 rounded-full text-gray-600' />
                        <FaYoutube size={40} className='hover:text-red-500 rounded-full  text-gray-600' />
                        <FaLinkedin size={40} className='hover:text-blue-500 rounded-full  text-gray-600' />
                    </div>
                </div>

            </div>
        </>
    )
    const services = (
        <>
            <section id='services' className='w-full flex flex-col items-center pb-10 '>
                <h2 className="text-xl text-blue-500">What I Offer?</h2>
                <h1 className="font-bold text-[55px] font-sans ">My Services</h1>
                <p className='text-gray-500 font-bold text-lg lg:w-1/3 md:w-1/2 text-center'>
                    There are many variations of passages of  but the majority have suffered alteration in some form.
                </p>

                <div className="grid lg:grid-cols-4 lg:gap-10 md:grid-cols-2 md:gap-4  px-3 pt-10 ">
                    <div className="flex justify-center gap-5 p-3 group flex-col items-center shadow-sm shadow-gray-200 py-5 hover:bg-gray-200 rounded-xl">
                        <div className='rounded-full  p-3 bg-blue-600 group-hover:bg-white '>
                            <FaSearch className='group-hover:text-blue-400 text-white' size={50} />
                        </div>
                        <h1 className="font-bold text-2xl">User Research</h1>
                        <h5 className="text-gray-400 font-fold  text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id veniam omnis!
                        </h5>

                    </div>

                    <div className="flex justify-center gap-5  group flex-col items-center shadow-sm shadow-gray-200  hover:bg-gray-200 rounded-xl">
                        <div className='rounded-full  p-3 bg-blue-600 group-hover:bg-white '>
                            <FaAddressBook className='group-hover:text-blue-400 text-white' size={50} />
                        </div>
                        <h1 className="font-bold text-2xl">Wordpress Developement </h1>
                        <h5 className="text-gray-400 font-fold  text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id veniam omnis!
                        </h5>

                    </div>
                    <div className="flex justify-center gap-5  group flex-col items-center shadow-sm shadow-gray-200  hover:bg-gray-200 rounded-xl">
                        <div className='rounded-full  p-3 bg-blue-600 group-hover:bg-white '>
                            <FaDragon className='group-hover:text-blue-400 text-white' size={50} />
                        </div>
                        <h1 className="font-bold text-2xl">FrontEnd Developement </h1>
                        <h5 className="text-gray-400 font-fold  text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id veniam omnis!
                        </h5>

                    </div>
                    <div className="flex justify-center gap-5 px-2 group flex-col items-center shadow-sm shadow-gray-200  hover:bg-gray-200 rounded-xl">
                        <div className='rounded-full  p-3 bg-blue-600 group-hover:bg-white '>
                            <FaVoicemail className='group-hover:text-blue-400 text-white' size={50} />
                        </div>
                        <h1 className="font-bold text-2xl">Visual Design </h1>
                        <h5 className="text-gray-400 font-fold  text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id veniam omnis!
                        </h5>

                    </div>
                </div>
            </section>
        </>)

    const portfolio = (
        <>
            <section  className='bg-blue-50 w-full shadow-sm shadow-black py-20 flex flex-col items-center gap-10'>
                <h2 className="text-xl text-blue-500 font-bold">Creative Portfolios</h2>
                <h1 className="text-4xl font-bold">Recent Works</h1>
                <p className="font-bold text-gray-500 md:w-1/2 text-center  text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    quibusdam aliquam odit incidunt tempora? Quia, voluptate fugit.
                </p>
                <div className="w-full md:grid-cols-2 grid lg:gap-10 md:gap-2 justify-center">
                    <div className='gap-4 flex flex-col  overflow-hidden max-h-[400px] px-2'>
                        <img src={pic} className='h-[70%] rounded-lg object-cover object-top' alt="" />
                        <a href="https://shoaib17101.github.io/Portfolio/" className='hover:text-blue-700'> <h1 className="font-bold text-2xl">Personal Portfolio</h1></a>
                        <p className="font-bold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic eos quisquam deleniti natus corrupti repellendus.</p>

                    </div>
                    <div className='gap-4 flex flex-col  overflow-hidden max-h-[400px] px-2'>
                        <img src={shop} className='h-[70%] rounded-lg object-cover object-top' alt="" />
                        <a href="https://shoaib17101.github.io/JewelryShop/" className='hover:text-blue-700'><h1 className="font-bold text-2xl">Bling Jewelry Shop</h1></a>
                        <p className="font-bold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic eos quisquam deleniti natus corrupti repellendus.</p>

                    </div>
                </div>
            </section>
        </>

    )
    const reviews = (
        <>
            <section className='bg-[rgb(9,14,52)] flex py-20 flex-col lg:h-[500px] gap-5 items-center'>
                <h1 className='text-white text-3xl font-bold text-center'>Some of My Happy Clients</h1>
                <p className="font-bold text-white text-lg lg:w-1/3 text-center">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className=" w-full flex flex-wrap gap-5 justify-center ">
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/uideck.svg" alt=""className='w-[170px] opacity-50 hover:opacity-100' />
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/tailgrids.svg" alt="" className='w-[170px] opacity-50 hover:opacity-100' />
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/lineicons.svg" alt="" className='w-[170px] opacity-50 hover:opacity-100' />
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/ayroui.svg" alt="" className='w-[170px] opacity-50 hover:opacity-100' />
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/plainadmin.svg" alt="" className='w-[170px]  opacity-50 hover:opacity-100' />
                </div>
            </section>
            <div className="bg-blue-600 md:w-3/4  md:mx-auto lg:h-[330px] rounded-lg relative lg:bottom-45 flex bottom-10 justify-center gap-3 py-20 items-center flex-col" >
                <h1 className="text-white text-2xl lg:text-[40px] font-bold md:w-1/2 text-center capitalize">Want To work together and  Create amazing products with me</h1>
                <div className="join flex">
                    <input type="email" placeholder='enter your email' name="" id="" className="input  bg-white border-0 rounded-lg backdrop-blur-lg" />
                    <button className="join-item btn-primary btn rounded-[10px]">Get a Quote</button>

                </div>
            </div>
        </>
    )
    const resume = (
        <>
            <section className='flex flex-col items-center w-full py-10 border-b'>
                <h1 className="font-bold text-2xl font-sans text-blue-500 py-4"> Education & Experience </h1>
                <h1 className="font-bold text-6xl py-2 "> My Resume </h1>
                <p className="font-bold text-xl text-gray-500 md:w-1/3 text-center py-3">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className="w-full flex ">
                    <div className="flex   md:w-1/2 items-start gap-3 order-2 py-10 flex-col px-3">
                        <h1 className="font-bold text-2xl">Web Developer</h1>
                        <h2 className="text-lg text-gray-600 font-bold">Google INC | New York</h2>
                        <span className="rounded-full bg-blue-500 text-white p-2 px-3">2020-2024</span>
                        <p className="text-gray-500 font-bold text-xl md:w-2/3 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam tenetur soluta deserunt. Ipsam, iusto tempora?
                        </p>
                    </div>
                    <div className="w-1/2 border-r-2 hidden md:block"></div>
                </div>
                <div className="w-full flex   ">
                    <div className="flex md:border-r-2 md:w-1/2 md:items-end items-start gap-3 py-10 flex-col px-3  ">
                        <h1 className="font-bold text-2xl">UI/UX Designer</h1>
                        <h2 className="text-lg text-gray-600 font-bold">Google INC | New York</h2>
                        <span className="rounded-full bg-blue-500 text-white p-2 px-3">2020-2024</span>
                        <p className="text-gray-500 font-bold text-xl md:w-2/3 md:text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam tenetur soluta deserunt. Ipsam, iusto tempora?
                        </p>
                    </div>
                    <div className="w-1/2 order-1 hidden md:block ">
                    </div>
                </div>
                <div className="w-full flex ">
                    <div className="flex   md:w-1/2 items-start gap-3 order-2 py-10 flex-col px-3">
                        <h1 className="font-bold text-2xl">Web Designer</h1>
                        <h2 className="text-lg text-gray-600 font-bold">Google INC | New York</h2>
                        <span className="rounded-full bg-blue-500 text-white p-2 px-3">2020-2024</span>
                        <p className="text-gray-500 font-bold text-xl md:w-2/3 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam tenetur soluta deserunt. Ipsam, iusto tempora?
                        </p>
                    </div>
                    <div className="w-1/2 border-r-2 md:block hidden"></div>
                </div>
                <div className="w-full flex   ">
                    <div className="flex md:border-r-2 md:w-1/2 md:items-end items-start gap-3 py-10 flex-col px-3">
                        <h1 className="font-bold text-2xl">Bachelor Degree </h1>
                        <h2 className="text-lg text-gray-600 font-bold">BKUC</h2>
                        <span className="rounded-full bg-blue-500 text-white p-2 px-3">2022-2026</span>
                        <p className="text-gray-500 font-bold text-xl md:w-2/3 md:text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam tenetur soluta deserunt. Ipsam, iusto tempora?
                        </p>
                    </div>
                    <div className="w-1/2 order-2 md:block hidden"></div>
                </div>


            </section>
        </>
    )

    const pricing = (
        <>
            <section id='pricing' className='w-full flex flex-col gap-3 py-20 items-center'>
                <h1 className="text-blue-500 font-bold text-xl">My Resume</h1>
                <h1 className="font-bold text-[44px] font-tahoma">My Pricing Plans</h1>
                <p className="font-bold text-xl text-gray-500 md:w-1/3 text-center py-3">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className="grid md:grid-cols-3 mx-auto md:w-2/3 gap-2">
                    <div className="flex flex-col py-10 justify-center  items-center hover:shadow-xl gap-2 rounded-xl">
                        <h1 className="font-bold text-2xl">Silver Package</h1>
                        <p className="font-bold text-md text-gray-500 p-5  ">There are many Lorem ipsum dolor sit amet. Lorem, ipsum dolor. variations  consectetur adipisicing elit. Porro, amet necessitatibus.</p>
                        <h1 className="text-5xl text-blue-500 font-bold py-3">99$</h1>
                        <button className="btn btn-primary rounded-full  ">See Details</button>
                    </div>
                    <div className="flex flex-col py-10 justify-center  items-center hover:shadow-xl gap-2 rounded-xl">
                        <h1 className="font-bold text-2xl">Gold Package</h1>
                        <p className="font-bold text-md text-gray-500 p-5  ">There are many Lorem ipsum dolor sit amet. Lorem, ipsum dolor. variations  consectetur adipisicing elit. Porro, amet necessitatibus.</p>
                        <h1 className="text-5xl text-blue-500 font-bold py-3">199$</h1>
                        <button className="btn btn-primary rounded-full  ">See Details</button>
                    </div>
                    <div className="flex flex-col py-10 justify-center  items-center hover:shadow-xl gap-2 rounded-xl">
                        <h1 className="font-bold text-2xl">Platinum Package</h1>
                        <p className="font-bold text-md text-gray-500 p-5  ">There are many Lorem ipsum dolor sit amet. Lorem, ipsum dolor. variations  consectetur adipisicing elit. Porro, amet necessitatibus.</p>
                        <h1 className="text-5xl text-blue-500 font-bold py-3">299$</h1>
                        <button className="btn btn-primary rounded-full  ">See Details</button>
                    </div>
                </div>
            </section>
        </>
    )

    const testimonials = (
        <section className='flex flex-col items-center py-20'>
            <h1 className="text-blue-500 font-bold text-xl">Awesome Testimonials </h1>
            <h1 className="font-bold text-4xl md:text-[44px] font-sans">Hear From My Clients </h1>
            <p className="font-bold text-xl text-gray-500 md:w-1/3 text-center py-3">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            <div className="grid md:grid-cols-2 gap-5 md:w-2/3">
                <div className="flex flex-col gap-4 p-6 py-10 shadow-xl">
                    <h1 className="text-3xl font-bold">Testimonial 1</h1>
                    <p className="font-bold text-gray-500">Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur adipisicing elit. Delectus magni corporis dolorum repellat adipisci est.</p>
                    <div className="flex gap-2">
                        <FaPerson size={50} className='rounded-full p-1 border' />
                        <span className="flex flex-col"><h2>Name</h2> <p>Lorem ipsum dolor sit.</p></span>
                    </div>

                </div>
                <div className="flex flex-col gap-4 p-6 shadow-xl">
                    <h1 className="text-3xl font-bold">Testimonial 2</h1>
                    <p className="font-bold text-gray-500">Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur adipisicing elit. Delectus magni corporis dolorum repellat adipisci est.</p>
                    <div className="flex gap-2">
                        <FaPerson size={50} className='rounded-full p-1 border' />
                        <span className="flex flex-col"><h2>Name</h2> <p>Lorem ipsum dolor sit.</p></span>
                    </div>

                </div>
                <div className="flex flex-col gap-4 p-6 shadow-xl">
                    <h1 className="text-3xl font-bold">Testimonial 3</h1>
                    <p className="font-bold text-gray-500">Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur adipisicing elit. Delectus magni corporis dolorum repellat adipisci est.</p>
                    <div className="flex gap-2">
                        <FaPerson size={50} className='rounded-full p-1 border' />
                        <span className="flex flex-col"><h2>Name</h2> <p>Lorem ipsum dolor sit.</p></span>
                    </div>

                </div>
                <div className="flex flex-col gap-4 p-6 shadow-xl">
                    <h1 className="text-3xl font-bold">Testimonial 4</h1>
                    <p className="font-bold text-gray-500">Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur adipisicing elit. Delectus magni corporis dolorum repellat adipisci est.</p>
                    <div className="flex gap-2">
                        <FaPerson size={50} className='rounded-full p-1 border' />
                        <span className="flex flex-col"><h2>Name</h2> <p>Lorem ipsum dolor sit.</p></span>
                    </div>

                </div>
            </div>

        </section>
    )
    const blog = (

        <section className='flex flex-col items-center py-20'>
            <h1 className="text-blue-500 font-bold text-xl">Recent Posts </h1>
            <h1 className="font-bold text-4xl md:text-[44px] ">From The Blog  </h1>
            <p className="font-bold text-xl text-gray-500 md:w-1/3 text-center py-3">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            <div className="flex gap-4 justify-center flex-wrap">
                <div className="card w-[400px]  shadow rounded-2xl">
                    <div className="card-body items-start ">
                        <figure >
                            <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-1.jpg " className=' p-0' alt="" />
                        </figure>
                        <h1 className="card-tittle font-bold text-2xl">Lorem ipsum dolor sit.</h1>
                        <p className="font-bold text-gray-500 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, voluptatem dicta! Repudiandae nam omnis enim!</p>
                        <h2 className='underline font-bold text-lg'>See More</h2>
                    </div>
                </div>
                <div className="card w-[400px] py-4 shadow rounded-2xl">
                    <div className="card-body items-start">
                        <figure >
                            <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-3.jpg" className=' p-0' alt="" />
                        </figure>
                        <h1 className="card-tittle font-bold text-2xl">Lorem ipsum dolor sit.</h1>
                        <p className="font-bold text-gray-500 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, voluptatem dicta! Repudiandae nam omnis enim!</p>
                        <h2 className='underline font-bold text-lg'>See More</h2>
                    </div>
                </div>
                <div className="card w-[400px] py-4 shadow rounded-2xl">
                    <div className="card-body items-start">
                        <figure >
                            <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-2.jpg " className=' p-0' alt="" />
                        </figure>
                        <h1 className="card-tittle font-bold text-2xl">Lorem ipsum dolor sit.</h1>
                        <p className="font-bold text-gray-500 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, voluptatem dicta! Repudiandae nam omnis enim!</p>
                        <h2 className='underline font-bold text-lg'>See More</h2>
                    </div>
                </div>

            </div>
        </section>
    )
    const contact = (
        <section id='contact' className='flex flex-col py-20 items-center'>
            <h1 className="text-blue-500 font-bold text-xl">Contact With Me  </h1>
            <h1 className="font-bold text-4xl md:text-[44px] font-tahoma">Have an Project in Mind?  </h1>
            <p className="font-bold text-xl text-gray-500 md:w-1/3 text-center py-3">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            <div className='md:w-1/2 flex flex-col items-center gap-4 p-2  w-full'>
                <form action="" className='w-full grid md:grid-cols-2  gap-3'>
                    <input type="text" placeholder=' Your Name' className=' border-0 w-full input  input-lg p-4 bg-gray-100 ' name="" id="" />
                    <input type="text" placeholder='Company name' className='border-0 w-full input  input-lg p-4 bg-gray-100 ' name="" id="" />
                    <input type="email" placeholder=' Your Email' className='border-0 w-full input  input-lg p-4 bg-gray-100 ' name="" id="" />
                    <input type="tel" placeholder='Your phone' className='border-0 w-full input  input-lg p-4 bg-gray-100 ' name="" id="" />
                    <textarea name="" placeholder='Tell us About Your Company' className='h-30 bg-gray-100' id=""></textarea>

                </form>
                <button className="btn   bg-blue-400  rounded-[20px] self-center px-10 text-xl p-3 text-white   h-11 border-0 hover:drop-shadow-2xl drop-shadow-blue-400 font-bold">Contact Me</button>
            </div>

        </section>
    )
    const footer = (
        <section className='bg-[rgb(9,14,52)] flex md:flex-row flex-col  flex-wrap gap-5 md:items-center justify-around '>
            <div className="flex flex-col  px-3 gap-2">
            <h1 className="font-bold text-white text-3xl">Let's Talk!</h1>
            <p className="font-bold text-white text-md">
                Contact Info <br />
closerpage@email.com <br />
12 Hilton St, Manchester M1 1JF <br />
+44 012 34 5678
            </p>
            </div>
            <div className="flex flex-col  px-3 gap-2 ">
                <h1 className="text-3xl text-white font-bold">
                    What I Do?
                </h1>
                <ul className="text-gray-500 text-lg font-bold">
                    <li>The Studio</li>
                    <li>Sponsoring</li>
                    <li>Newsletter</li>
                    <li>Contact Us</li>

                </ul>
            </div>
            <div className="flex flex-col py-12 px-3 gap-2">
                <h1 className="text-3xl text-white font-bold">
            News
                </h1>
                <ul className="text-gray-500 text-lg font-bold">
                    <li>Hott Stuff</li>
                    <li>Perfect Place</li>
                    <li>Vintage</li>
                    <li>Products</li>

                </ul>
            </div>
               <div className="">
                <h1 className="text-3xl text-white font-bold">
            Quick Links
                </h1>
                <ul className="text-gray-500 text-lg font-bold">
                    <li>Style </li>
                    <li>Health </li>
                    <li>Relationship</li>
                    <li>Legal & Privacy</li>

                </ul>
            </div>
        </section>
    )
    return (
        <>
            {navbar}
            {menu}
            {hero}
            {aboutme}
            {services}
            {portfolio}
            {reviews}
            {resume}
            {pricing}
            {testimonials}
            {blog}
            {contact}
            {footer}

        </>
    )
}