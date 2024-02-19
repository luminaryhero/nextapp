import Image from 'next/image';
import { FC } from 'react';
import { AiOutlineMail, AiOutlineStar } from 'react-icons/ai';
import { BiExport } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { LiaClock } from 'react-icons/lia';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { PiDownloadSimpleLight } from 'react-icons/pi';
import { RiVipCrown2Line, RiLightbulbFlashLine } from 'react-icons/ri';
import { TbBrandBilibili, TbWindmill } from 'react-icons/tb';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { FcLike } from 'react-icons/fc';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { BsPlayFill } from 'react-icons/bs';

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
    return (
        <main className="relative w-full h-full mx-auto">
            {/* header */}
            <div className="relative w-full h-[440px] mx-auto">
                <div className="absolute w-full h-[440px] -z-1">
                    <Image src="/static/bilibili/anime-banner-bg.webp" fill alt="" />
                </div>
                <div className="absolute w-full px-[24px] bg-transparent">
                    <div className="flex justify-between h-[64px] w-full">
                        <ul className="flex">
                            {menus.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className="inline-flex items-center mr-[10px]"
                                    >
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
                                        placeholder="禁止直播带货"
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

                <div className="absolute bottom-0  w-full h-[190px] px-[60px] bg-gradient-to-t from-white">
                    <div className="flex h-[46px] mb-[30px]">
                        <div className="flex items-center h-[46px] p-1 bg-rose-300/50 rounded-[23px]">
                            <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-rose-700/50">
                                <FaPlay className="text-[20px] text-white" />
                            </div>
                            <span className="pl-4 pr-6 text-white text-[18px]">
                                进入网游世界，共建赛博家庭
                            </span>
                        </div>
                        <div className="flex justify-center items-center w-[46px] h-[46px] ml-[30px] text-white rounded-full bg-rose-700/50">
                            <MdFavorite className="text-[30px] text-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-x-4 h-[97px] mb-[30px]">
                        {Array(7)
                            .fill(0)
                            .map((_, i) => {
                                return (
                                    <a
                                        className="relative bg-red-300 rounded-lg overflow-hidden"
                                        href="#"
                                    >
                                        <Image
                                            className="-z-1"
                                            src="/static/bilibili/anime-banner-bg.webp"
                                            fill
                                            alt=""
                                        />
                                        <span className="absolute left-2 bottom-1 text-white text-[14px]">
                                            晚安世界
                                        </span>
                                    </a>
                                );
                            })}
                    </div>
                </div>
            </div>

            {/* content nav */}
            <div className="grid grid-cols-4 gap-x-6 w-full h-[118px] mt-[52px] px-[60px]">
                <div className="h-[118px] px-[16px] pt-[20px] pb-[16px] rounded-lg bg-gradient-to-r from-pink-200/50 to-pink-50/50 box-border">
                    <div className="inline-flex items-center text-[20px]">
                        <span className="mr-1">番剧索引</span> <IoIosArrowForward />
                    </div>
                    <div className="flex items-end mt-1">
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">追番人数</span>
                            <span className="pr-1 text-gray-500">更新时间</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px]">
                            <span className="pr-1 text-gray-500">最高评分</span>
                            <span className="pr-1 text-gray-500">播放数量</span>
                        </div>
                    </div>
                </div>
                <div className="h-[118px] px-[16px] pt-[20px] pb-[16px] rounded-lg bg-gradient-to-r from-green-200/50 to-green-50/50 box-border">
                    <div className="inline-flex items-center text-[20px]">
                        <span className="mr-1">类型风格</span> <IoIosArrowForward />
                    </div>
                    <div className="flex items-end mt-1">
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">原创</span>
                            <span className="pr-1 text-gray-500">漫画改</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">小说改</span>
                            <span className="pr-1 text-gray-500">游戏改</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px]">
                            <span className="pr-1 text-gray-500">特摄</span>
                            <span className="pr-1 text-gray-500">布袋戏</span>
                        </div>
                    </div>
                </div>
                <div className="h-[118px] px-[16px] pt-[20px] pb-[16px] rounded-lg bg-gradient-to-r from-blue-200/50 to-blue-50/50 box-border">
                    <div className="inline-flex items-center text-[20px]">
                        <span className="mr-1">首播时间</span> <IoIosArrowForward />
                    </div>
                    <div className="flex items-end mt-1">
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">2023</span>
                            <span className="pr-1 text-gray-500">2019</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">2022</span>
                            <span className="pr-1 text-gray-500">2018</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">2021</span>
                            <span className="pr-1 text-gray-500">2017</span>
                        </div>
                        <div className="flex flex-col justify-between h-[50px]">
                            <span className="pr-1 text-gray-500">2020</span>
                            <span className="pr-1 text-gray-500">2016</span>
                        </div>
                    </div>
                </div>
                <div className="h-[118px] px-[16px] pt-[20px] pb-[16px] rounded-lg bg-gradient-to-r from-red-200/50 to-red-50/50 box-border">
                    <div className="inline-flex items-center text-[20px]">
                        <span className="mr-1">热搜</span>
                    </div>
                    <div className="flex items-end mt-1">
                        <div className="flex flex-col justify-between h-[50px] mr-[32px]">
                            <span className="pr-1 text-gray-500">咒术回战 第二季</span>
                            <span className="pr-1 text-gray-500">白圣女与黑牧师</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 我的追番 */}
            <div className="h-[220px] mx-[60px] mt-[56px]">
                <div className="flex justify-between items-center h-[34px] my-[12px]">
                    <span className="flex items-center">
                        <FcLike className="text-[30px]" />
                        <span className="text-[24px] font-bold ml-2">正在追</span>
                    </span>
                    <span className="flex items-center justify-center w-[97px] h-[34px] border rounded-lg">
                        <FaHeartCircleCheck className="text-[16px]" />
                        <span className="ml-2">我的追番</span>
                    </span>
                </div>
                <div className="flex">
                    <div className="w-[200px] h-[162px] mr-[20px]">
                        <a className="relative inline-block w-full h-[111px] rounded-lg" href="#">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/anime-banner-bg.webp"
                                fill
                                alt=""
                            />
                            <div className="absolute left-0 bottom-2 w-full px-[8px]">
                                <div className="flex justify-between items-center w-full text-[12px] text-white">
                                    <span>看到第一话 92%</span>
                                    <span>历史观看</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100/50 rounded-[1px] mt-1">
                                    <div className="w-[92%] h-1 bg-white rounded-[1px]" />
                                </div>
                            </div>
                        </a>
                        <div className="mt-1">
                            <div className="text-[14px] text-gray-800">奇幻世界舅舅</div>
                            <div className="text-[12px] text-gray-500 mt-1">全13话</div>
                        </div>
                    </div>
                    <div className="w-[200px] h-[162px] mr-[20px]">
                        <a className="relative inline-block w-full h-[111px] rounded-lg" href="#">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/anime-banner-bg.webp"
                                fill
                                alt=""
                            />
                            <div className="absolute left-0 bottom-2 w-full px-[8px]">
                                <div className="flex justify-between items-center w-full text-[12px] text-white">
                                    <span>看到第一话 92%</span>
                                    <span>历史观看</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100/50 rounded-[1px] mt-1">
                                    <div className="w-[92%] h-1 bg-white rounded-[1px]" />
                                </div>
                            </div>
                        </a>
                        <div className="mt-1">
                            <div className="text-[14px] text-gray-800">奇幻世界舅舅</div>
                            <div className="text-[12px] text-gray-500 mt-1">全13话</div>
                        </div>
                    </div>
                    <div className="w-[200px] h-[162px] mr-[20px]">
                        <a className="relative inline-block w-full h-[111px] rounded-lg" href="#">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/anime-banner-bg.webp"
                                fill
                                alt=""
                            />
                            <div className="absolute left-0 bottom-2 w-full px-[8px]">
                                <div className="flex justify-between items-center w-full text-[12px] text-white">
                                    <span>看到第一话 92%</span>
                                    <span>历史观看</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100/50 rounded-[1px] mt-1">
                                    <div className="w-[92%] h-1 bg-white rounded-[1px]" />
                                </div>
                            </div>
                        </a>
                        <div className="mt-1">
                            <div className="text-[14px] text-gray-800">奇幻世界舅舅</div>
                            <div className="text-[12px] text-gray-500 mt-1">全13话</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 新番时间表 */}
            <div className=" mx-[60px] mt-[56px]">
                <div className="relative flex items-center h-[34px]">
                    <Image src="/static/bilibili/clock.png" width={34} height={34} alt="" />
                    <span className="text-[24px] font-bold ml-1">新番时间表</span>
                    <div className="flex justify-center items-center h-[34px] p-[2px] ml-4  bg-gray-200 rounded-[17px]">
                        <div className="flex h-full bg-gray-200 rounded-[16px]">
                            <span className="flex justify-center items-center text-gray-800 px-3 bg-white rounded-[16px]">
                                最近更新
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周一
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周二
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周三
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周四
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周五
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周六
                            </span>
                            <span className="flex justify-center items-center text-gray-500 px-3 rounded-[16px]">
                                周日
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[331px] ">
                <div className="absolute -z-1 left-0 bottom-0 w-full h-[300px] border-t-2 border-t-[#E3EFCD] bg-gradient-to-b from-green-100/50 to-white/50" />
                <div className="absolute grid grid-cols-7 w-full h-[331px] mt-3 px-[60px]">
                    {Array(7)
                        .fill(0)
                        .map((_, i) => {
                            return (
                                <div className="h-full">
                                    <div className="flex justify-center items-center w-[96px] h-[23px] mt-[10px] text-[14px] text-green-700 font-bold rounded-[12px] bg-white">
                                        <div className="flex justify-center items-center w-full h-full rounded-[12px] bg-[#E3EFCD] text-[#71AD00]">
                                            周一 22:00
                                        </div>
                                    </div>
                                    <div className="relative mt-2 h-[224px] rounded-lg">
                                        <Image
                                            className="absolute rounded-lg"
                                            src="/static/bilibili/anime-cover.webp"
                                            width={168}
                                            height={224}
                                            alt=""
                                        />
                                        <div className="absolute left-0 bottom-0 w-[168px] h-[30px] text-right leading-[30px] px-3 rounded-lg bg-gradient-to-t from-black/90 to-black/5">
                                            <span className="text-right text-white text-[24px] text-extrabold italic">
                                                8.1
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-gray-800 text-[15px]">
                                            砂糖苹果童话故事
                                        </div>
                                        <div className="text-gray-500 text-[13px]">更新至15话</div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* 番剧热播榜 */}
            <div className="px-[60px] mt-[56px]">
                <div className="flex justify-between items-center h-[34px] my-[12px]">
                    <span className="flex items-center">
                        <Image src="/static/bilibili/hot.png" width={34} height={34} alt="" />
                        <span className="text-[24px] font-bold ml-2">番剧热播榜</span>
                    </span>
                    <span className="flex items-center justify-center h-[34px] px-3 border rounded-lg">
                        <span className="mr-1">查看全部</span>
                        <IoIosArrowForward />
                    </span>
                </div>
                <div className="grid grid-cols-6 h-[334px]">
                    {Array(6)
                        .fill(0)
                        .map((_, i) => {
                            return (
                                <div className="w-[200px] h-[334px] bg-pink-100/80 rounded-lg">
                                    <div className="relative w-[200px] h-[266px] rounded-lg">
                                        <Image
                                            className="rounded-lg"
                                            src="/static/bilibili/anime-ranking-card.webp"
                                            width={200}
                                            height={266}
                                            alt=""
                                        />
                                        <div className="absolute left-0 bottom-0 w-[200px] h-[40px] text-right leading-[30px] px-3 rounded-lg bg-gradient-to-t from-black/100 to-black/5">
                                            <span className="text-right text-white text-[24px] text-extrabold italic">
                                                9.8
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center px-4 mt-2">
                                        <div className="w-[44px] scale-[1.5] pl-2">
                                            <span className="text-[32px] text-[#EA3EBF]/40 text-bold italic font-sans">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="text-gray-800 text-[15px]">
                                                名侦探柯南
                                            </div>
                                            <div className="text-gray-500 text-[14px]">
                                                真相永远只有一个
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* 新热推荐 */}
            <div className="px-[60px] mt-[56px]">
                <div className="flex justify-between items-center h-[34px] my-[12px]">
                    <span className="flex items-center">
                        <Image src="/static/bilibili/fav.png" width={34} height={34} alt="" />
                        <span className="text-[24px] font-bold ml-2">新热推荐</span>
                    </span>
                </div>

                <div className="relative w-full h-[461px] mt-4">
                    <div className="absolute -z-1 right-0 bottom-0 w-[96%] h-[437px] bg-purple-500/90 rounded-lg" />
                    <div className="absolute w-[778px] h-[437px] rounded-lg">
                        <Image
                            className="rounded-lg"
                            src="/static/bilibili/anime-banner-bg.webp"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="absolute bottom-10 right-0 w-[480px] h-[290px] mt-7">
                        <div className="text-[27px] font-black text-white">
                            超常技能开启奇幻世界美食之旅
                        </div>
                        <div className="text-[25px] font-black text-white italic mt-2">9.6</div>
                        <div className="text-white line-clamp-2 my-2 pr-10">
                            普通上班族向田刚志，某天突然被召唤到了异世界。成为异世界居民后，他失望地发现自己的固有技能是“网上超市”这个乍看无用的技能。但实际上，使用这个技能购买到的现代食品竟能在异世界发挥惊人的效果？！...
                        </div>
                        <div className="flex">
                            <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white/20 mr-5">
                                <BsPlayFill className="text-[30px] text-white" />
                            </div>
                            <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white/20">
                                <MdOutlineFavoriteBorder className="text-[24px] text-white" />
                            </div>
                        </div>
                        <div className="flex items-center h-[80px] mt-10 overflow-x-hidden">
                            <div className="w-[130px] h-[72px]  mr-5 scale-[1.1] origin-left rounded-[10px]">
                                <div className="relative w-[130px] h-[72px]  rounded-lg">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/anime-banner-bg.webp"
                                        fill
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-[130px] h-[72px] rounded-lg mr-5">
                                <div className="relative w-[130px] h-[72px] rounded-lg">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/anime-banner-bg.webp"
                                        fill
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-[130px] h-[72px] rounded-lg mr-5">
                                <div className="relative w-[130px] h-[72px] rounded-lg ">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/anime-banner-bg.webp"
                                        fill
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-[130px] h-[72px] rounded-lg mr-5">
                                <div className="relative w-[130px] h-[72px] rounded-lg ">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/anime-banner-bg.webp"
                                        fill
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default App;
