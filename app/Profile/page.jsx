'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../app/img/Rectangle 5102.png'
import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";
import CreditCard from './CreditCard';
// Image start
import shape from '../../public/images/shape.png' 
import shape1 from '../../public/images/shape1.png' 
// Image end
const page = () => {
    const [clickon, setClickon] = useState('profile')
    const [active, setActive] = useState('')

    const Changehandle = () => {
        setClickon(!true)
    }

    const [formData, setFormData] = useState();
    const onFinish = (values) => {
        Swal.fire({
            title: `Successfull ${values.name}!`,
            text: "Your password changed successfully",
            icon: "success",
        });
        setFormData(values);
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className='flex gap-10 mt-20'>
            <div className='w-4/12 border shadow-lg shadow-gray-400 rounded-md p-10 sticky top-0'>
                <h2 className='text-2xl font-bold'>Account Information</h2>
                <div className='my-3 '>
                    <p className='text-xs'>Profile Picture</p>
                    <Image src={img} width={500} height={500} className='w-[200px] h-[200px]' />
                </div>
                <h3 onClick={() => setClickon('profile')} className={`hover:text-orange-600 cursor-pointer capitalize ${active ? 'text-orange-500' : ''}`}>Profile</h3>
                <h3 onClick={() => setClickon('changePass')} className='hover:text-orange-600 cursor-pointer capitalize'>Change Password</h3>
                <h3 onClick={() => setClickon('package')} className='hover:text-orange-600 cursor-pointer capitalize'>Buy credits</h3>
            </div>
            {
                // profile 
                clickon == 'profile' ? <div className='w-full flex flex-col gap-2'><h2>My Profile</h2><div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>
                    <ul className="grid grid-cols-2 gap-4">
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Fullname</h2>
                            <h5 className="text-base font-normal mb-1">Mahedi Hasan</h5>
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Email</h2>
                            <h5 className="text-base font-normal mb-1">user@gmail.com</h5>
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-3">Image</h2>
                            <Image src={img} height={100} width={100} alt="profile" className="rounded-full w-20 h-20 " />
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Phone</h2>
                            <h5 className="text-base font-normal mb-1">01998311602</h5>
                        </li>
                    </ul>
                </div></div> : ''
                    // Password 
                    || clickon === "changePass" ? <div className='w-full flex flex-col gap-2'><h2>Change Password</h2><div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>
                        <Form
                            className="profile  flex flex-col "
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <Form.Item
                                name="password"
                                label="Old Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your old password!',
                                    },
                                ]}

                                hasFeedback
                            >
                                <Input placeholder="Enter your old password" />
                            </Form.Item>

                            <Form.Item
                                name="password1"
                                label="New Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your new password!',
                                    },
                                ]}

                                hasFeedback
                            >
                                <Input placeholder="Enter your new password" />
                            </Form.Item>

                            <Form.Item
                                name="password3"
                                label="Confirm Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Confirm your password!',
                                    },
                                ]}

                                hasFeedback
                            >
                                <Input placeholder="Confirm your password" />
                            </Form.Item>

                            <Button type="primary" htmlType="submit">
                                Change password
                            </Button>
                        </Form>
                    </div></div> : ''
                        || clickon == 'package' ? <div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>
                            <div>
                                <h2 className='capitalize text-2xl font-bold'>Packages</h2>
                                <h4 className='capitalize text-base px-5 py-[15px] bg-[#e5eaed] mt-6'><span>Your credits:</span> <span className='text-[#FF6400]'>10 Credits</span></h4>
                                <div className='mt-[42px] grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    <CreditCard credit={<h2 className='flex flex-col'><span className='text-2xl'>$0</span> <span className='text-[7.5px]'>/1 Credit</span></h2>} bgColor='bg1' subL2='24/7 Full support' subL='1 Credit' title={'Free'} subT='Basic' shape={shape1} />
                                    <CreditCard credit={<h2 className='flex flex-col'><span className='text-2xl'>$10</span> <span className='text-[7.5px]'>/10 Credit</span></h2>} bgColor='bg2' subL2='24/7 Full support' subL='10 Credit' title={'$10'} subT='Standard' shape={shape} />
                                    <CreditCard credit={<h2 className='flex flex-col'><span className='text-2xl'>$0</span> <span className='text-[7.5px]'>/1 Credit</span></h2>} bgColor='bg1' subL2='24/7 Full support' subL='Buy Custom Credit ' title={<h1><span>$10/</span ><span className='text-xs'>Per Credit</span></h1>} subT='Custom' shape={shape1} />
                                </div>
                                
                            </div>
                        </div> : ''
            }
            {/* <div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>

            </div> */}
        </div>
    );
};

export default page;