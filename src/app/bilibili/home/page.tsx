import { FC } from 'react';

import { TbBrandBilibili, TbWindmill } from 'react-icons/tb';
import { PiDownloadSimpleLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { RiVipCrown2Line, RiLightbulbFlashLine } from 'react-icons/ri';
import {
    AiOutlineMail,
    AiOutlineStar,
    AiFillFlag,
    AiFillVideoCamera,
    AiFillSmile,
} from 'react-icons/ai';
import { LiaClock } from 'react-icons/lia';
import { BiExport } from 'react-icons/bi';
import { MdArticle, MdForum } from 'react-icons/md';
import { BsFileMusicFill } from 'react-icons/bs';
import { GoVideo } from 'react-icons/go';
import { LuListVideo } from 'react-icons/lu';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const App: FC = () => {
    const menus = [
        { id: '1', text: '首页', icon: 'bilibili' },
        { id: '2', text: '番剧', icon: '' },
        { id: '3', text: '直播', icon: '' },
        { id: '4', text: '游戏中心', icon: '' },
        { id: '5', text: '会员购', icon: '' },
        { id: '6', text: '漫画', icon: '' },
        { id: '7', text: '赛事', icon: '' },
        { id: '8', text: '下载客户端', icon: 'download' },
    ];

    const channels = [
        { id: '1', text: '番剧' },
        { id: '2', text: '国创' },
        { id: '3', text: '综艺' },
        { id: '4', text: '动画' },
        { id: '5', text: '鬼畜' },
        { id: '6', text: '舞蹈' },
        { id: '7', text: '娱乐' },
        { id: '8', text: '科技' },
        { id: '9', text: '美食' },
        { id: '10', text: '汽车' },
        { id: '11', text: '运动' },
        { id: '12', text: '电影' },
        { id: '13', text: '电视剧' },
        { id: '14', text: '记录片' },
        { id: '15', text: '游戏' },
        { id: '16', text: '音乐' },
        { id: '17', text: '影视' },
        { id: '18', text: '知识' },
        { id: '19', text: '资讯' },
        { id: '20', text: '生活' },
        { id: '21', text: '时尚' },
        { id: '22', text: '更多' },
    ];

    return (
        <main className="relative w-full mx-auto">
            {/* header */}
            <div className="absolute left-0 -right-1 h-[156px] px-[24px] z-1 bgi-banner">
                <div className="flex justify-between h-[64px] w-full">
                    <ul className="flex">
                        {menus.map((item) => {
                            return (
                                <li key={item.id} className="inline-flex items-center mr-[10px]">
                                    {item.icon === 'bilibili' && (
                                        <TbBrandBilibili className="ml-1 text-white text-[22px]" />
                                    )}
                                    {item.icon === 'download' && (
                                        <PiDownloadSimpleLight className="ml-1 text-white text-[22px]" />
                                    )}
                                    <span className="text-white">{item.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex-1 flex items-center">
                        <div className="flex items-center w-full h-[40px] bg-[#F1F2F3] hover:bg-white border rounded-lg">
                            <div className="flex-1 flex items-center w-full h-[32px] ml-2">
                                <input
                                    type="text"
                                    className="w-full h-full rounded-lg px-2 outline-none bg-transparent"
                                    placeholder="狼人杀京城大师赛"
                                />
                            </div>
                            <div className="flex justify-center items-center w-[32px]">
                                <FiSearch className="text-gray-800 text-[16px]" />
                            </div>
                        </div>
                    </div>
                    <ul className="flex">
                        <li className="inline-flex flex-col justify-center items-center w-[50px] ml-[10px]">
                            <div className="self-end w-[38px] h-[38px] bg-white rounded-full" />
                        </li>
                        <li className="inline-flex flex-col justify-center items-center min-w-[50px] ml-[10px]">
                            <RiVipCrown2Line className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">大会员</span>
                        </li>
                        <li className="inline-flex flex-col justify-center items-center w-[50px] ml-[10px]">
                            <AiOutlineMail className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">消息</span>
                        </li>
                        <li className="inline-flex flex-col justify-center items-center min-w-[50px] ml-[10px]">
                            <TbWindmill className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">动态</span>
                        </li>
                        <li className="inline-flex flex-col justify-center items-center min-w-[50px] ml-[10px]">
                            <AiOutlineStar className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">收藏</span>
                        </li>
                        <li className="inline-flex flex-col justify-center  items-center min-w-[50px] ml-[10px]">
                            <LiaClock className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">历史</span>
                        </li>
                        <li className="inline-flex flex-col justify-center items-center min-w-[50px] ml-[10px]">
                            <RiLightbulbFlashLine className="text-white text-[22px]" />
                            <span className="text-white text-[13px]">创作中心</span>
                        </li>
                        <li className="inline-flex justify-center items-center min-w-[50px] ml-[10px]">
                            <div className="flex justify-center items-center w-[90px] h-[34px] bg-pink-500 rounded-lg">
                                <BiExport className="text-white text-[22px]" />
                                <span className="text-white text-[13px] ml-2">投稿</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-[64px]" />

            <div className="relative w h-[92px] mt-2">
                <div className="absolute w-[162px] h-[78px] bgi-logo" />
            </div>

            {/* channel */}
            <div className="w h-[110px] flex items-center">
                <div className="flex items-center h-[110px]">
                    <div className="inline-flex flex-col justify-center items-center mr-[24px]">
                        <div className="w-[46px] h-[46px] bg-gray-200 rounded-full" />
                        <span className="text-gray-900 text-[13px] mt-1">动态</span>
                    </div>
                    <div className="inline-flex flex-col justify-center items-center mr-[24px]">
                        <div className="w-[46px] h-[46px] bg-gray-200 rounded-full" />
                        <span className="text-gray-900 text-[13px] mt-1">热门</span>
                    </div>
                </div>
                <div className="flex-1 flex items-center h-[110px]">
                    <div className="grid grid-cols-11 gap-x-2 gap-y-3 w-[909px] h-[66px] pr-[30px] border-r">
                        {channels.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    className="inline-block w-[72px] h-[26px] text-center leading-[26px] border rounded-md text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-500"
                                    href="#"
                                >
                                    {item.text}
                                </a>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-3 w-[240px] h-[66px] pl-[16px] text-gray-600">
                        <div className="flex items-center">
                            <MdArticle className="mr-1" />
                            <span>专栏</span>
                        </div>
                        <div className="flex items-center">
                            <AiFillFlag className="mr-1" />
                            <span>活动</span>
                        </div>
                        <div className="flex items-center">
                            <MdForum className="mr-1" />
                            <span>社区中心</span>
                        </div>
                        <div className="flex items-center">
                            <AiFillVideoCamera className="mr-1" />
                            <span>直播</span>
                        </div>
                        <div className="flex items-center">
                            <AiFillSmile className="mr-1" />
                            <span>课堂</span>
                        </div>
                        <div className="flex items-center">
                            <BsFileMusicFill className="mr-1" />
                            <span>新歌热榜</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* main */}
            <div className="w grid grid-cols-5 gap-[20px]">
                <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                    <div className="relative w-full h-[368px] rounded-lg">
                        <Image
                            src="/static/bilibili/carousel.webp"
                            fill
                            alt=""
                            className="rounded-lg"
                        />
                        <div className="flex absolute left-0 bottom-0 w-full h-[80px] px-4 bgi-swipe rounded-lg">
                            <div className="flex-1">
                                <span className="text-white text-[20px]">
                                    影史经典！斯皮尔伯格成名之作
                                </span>
                                <ol className="flex items-center mt-2 space-x-2 h-[30px]">
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[12px] h-[12px] bg-white rounded-full " />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                    <li className="w-[8px] h-[8px] bg-gray-100/50 rounded-full" />
                                </ol>
                            </div>
                            <div className="flex justify-between w-[80px] h-[28px] z-2">
                                <span className="flex justify-center items-center w-[28px] h-[28px] bg-gray-500/50 text-white rounded-lg">
                                    <IoIosArrowBack />
                                </span>
                                <span className="flex justify-center items-center w-[28px] h-[28px] bg-gray-500/50 text-white rounded-lg">
                                    <IoIosArrowForward />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-[210px] rounded-lg">
                    <a
                        className="relative inline-block w-full h-[136px] border rounded-lg overflow-hidden"
                        href="#"
                    >
                        <div className="flex justify-between absolute bottom-0 left-0 w-full h-[38px] pt-[16px] px-[8px] pt-[6px] bgi-mask">
                            <div className="flex items-center">
                                <div className="flex items-center text-[12px] text-white">
                                    <GoVideo />
                                    <span className="ml-1">3003</span>
                                </div>
                                <div className="flex items-center ml-3 text-white">
                                    <LuListVideo />
                                    <span className="ml-1">160</span>
                                </div>
                            </div>
                            <div className="flex items-center text-white text-[12px]">30:42</div>
                        </div>
                    </a>
                    <div className="h-[64px] pr-[16px]">
                        <p className="h-[44px] text-gray-800 text-[15px]">
                            【精彩】微软收购动视暴雪 | 世纪收购战争
                        </p>
                        <div className="h-[17px] mt-1 pl-1 text-[12px]">
                            <span className="text-orange-700 px-2 mr-2 bg-orange-100 rounded-lg">
                                8万点赞
                            </span>
                            <span className="text-gray-500">小Lin说</span>
                            <span className="text-gray-500 ml-2">· 10-6</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default App;
