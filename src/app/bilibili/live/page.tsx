import Image from 'next/image';
import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TbBrandBilibili } from 'react-icons/tb';
import { RiLiveLine } from 'react-icons/ri';
import { LuRefreshCcw } from 'react-icons/lu';
import { FaRankingStar } from 'react-icons/fa6';
import { LiaHotjar } from 'react-icons/lia';

const App: FC = () => {
    const menus = [
        { id: '1', text: '首页', icon: 'bilibili' },
        { id: '2', text: '直播', icon: '' },
        { id: '3', text: '全部', icon: '' },
        { id: '4', text: '网游', icon: '' },
        { id: '5', text: '手游', icon: '' },
        { id: '6', text: '单机游戏', icon: '' },
        { id: '7', text: '更多', icon: '' },
    ];
    return (
        <main className="w-full h-full mx-auto">
            {/* header */}

            <div className="relative w-full mx-auto">
                <div className="w-full pr-[24px] pl-[120px] bg-white">
                    <div className="flex justify-between h-[64px] w-full">
                        <ul className="flex">
                            {menus.map((item) => {
                                return (
                                    <li key={item.id} className="inline-flex items-center mx-2">
                                        {item.icon === 'bilibili' && (
                                            <TbBrandBilibili className="ml-1 text-blue-500 text-[20px]" />
                                        )}
                                        <span className="text-gray-900">{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex-1 flex items-center mx-4">
                            <div className="flex items-center w-full h-[40px] bg-[#F1F2F3] hover:bg-white border rounded-lg">
                                <div className="flex-1 flex items-center w-full h-[32px] ml-2">
                                    <input
                                        type="text"
                                        className="w-full h-full rounded-lg px-2 outline-none bg-transparent"
                                        placeholder="禁止直播带货"
                                    />
                                </div>
                                <div className="flex justify-center items-center w-[32px]">
                                    <FiSearch className="text-gray-900 text-[16px]" />
                                </div>
                            </div>
                        </div>
                        <ul className="flex">
                            <li className="inline-flex flex-col justify-center items-center w-[50px] mx-[10px]">
                                <div className="self-end w-[38px] h-[38px] bg-gray-400 rounded-full" />
                            </li>
                            <li className="inline-flex flex-col justify-center items-center px-2">
                                <span className="text-gray-900 text-[14px]">动态</span>
                            </li>
                            <li className="inline-flex flex-col justify-center items-center px-2">
                                <span className="text-gray-900 text-[14px]">签到</span>
                            </li>
                            <li className="inline-flex flex-col justify-center items-center px-2">
                                <span className="text-gray-900 text-[14px]">会员中心</span>
                            </li>
                            <li className="inline-flex flex-col justify-center items-center px-2">
                                <span className="text-gray-900 text-[14px]">幻星互动</span>
                            </li>
                            <li className="inline-flex justify-center items-center px-2">
                                <div className="flex justify-center items-center h-[34px] px-3 bg-pink-500 rounded-lg">
                                    <RiLiveLine className="text-white text-[16px]" />
                                    <span className="text-white text-[14px] ml-1">我要开播</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[630px] mx-auto">
                    <div className="absolute w-full h-[630px]">
                        <Image src="/static/bilibili/live-banner.png" fill alt="" />
                    </div>
                </div>

                <div className="absolute top-[120px] left-1/2 -translate-x-1/2 flex justify-between items-center w-[1140px] h-[522px]">
                    <div className="w-[928px] h-[522px] rounded-lg">
                        <div className="relative w-[928px] h-[522px] rounded-lg">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-[522px] ml-[12px] p-[10px] bg-gray-800/50 rounded-lg">
                        <div className="relative w-[160px] h-[90px]">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                            <div className="absolute w-[160px] h-[90px] bg-gray-800/50" />
                            <span className="absolute left-2 bottom-1 text-white">舞见</span>
                        </div>
                        <div className="relative w-[160px] h-[90px]">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                            <div className="absolute w-[160px] h-[90px] bg-gray-800/50" />
                            <span className="absolute left-2 bottom-1 text-white">聊天电台</span>
                        </div>
                        <div className="relative w-[160px] h-[90px] rounded-lg outline outline-2 outline-blue-500">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                            <span className="absolute left-2 bottom-1 text-white">视频唱见</span>
                        </div>
                        <div className="relative w-[160px] h-[90px]">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                            <div className="absolute w-[160px] h-[90px] bg-gray-800/50" />
                            <span className="absolute left-2 bottom-1 text-white">唱见电台</span>
                        </div>
                        <div className="relative w-[160px] h-[90px]">
                            <Image
                                className="rounded-lg"
                                src="/static/bilibili/live-goodbye.jpg"
                                fill
                                alt=""
                            />
                            <div className="absolute w-[160px] h-[90px] bg-gray-800/50" />
                            <span className="absolute left-2 bottom-1 text-white">萌宅领域</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-[1140px] h-[155px] mx-auto mt-[40px]">
                <div className="w-[436px] h-[156px]">
                    <div className="flex justify-between items-center mb-2 px-2">
                        <span className="text-gray-900 font-bold text-[16px]">我的关注</span>
                        <span className="text-gray-500 text-[12px]">查看全部&gt;</span>
                    </div>
                    <div className="flex justify-center items-center w-[436px] h-[124px] bg-white rounded-lg">
                        暂无直播中的主播
                    </div>
                </div>
                <div className="flex-1 ml-4  h-[124px]">
                    <div className="flex justify-between items-center w-full mb-2 px-2">
                        <span className="text-gray-900 font-bold text-[16px]">分区推荐</span>
                    </div>
                    <div className="flex justify-between items-center w-full h-[124px]">
                        {Array(7)
                            .fill(0)
                            .map((_, i) => {
                                return (
                                    <div className="flex flex-col items-center justify-center w-[89px] h-full px-2 bg-white rounded-lg">
                                        <div className="relative w-[48px] h-[48px] mb-2">
                                            <Image src="/static/bilibili/game.png" fill alt="" />
                                        </div>
                                        <div className="text-[16px]">娱乐</div>
                                        <div className="text-[13px] text-gray-500 line-clamp-1">
                                            颜即是正义！
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>

            <div className="flex w-[1140px] h-[320px] mx-auto mt-[40px]">
                <div className="grow-0 w-[436px] h-full grid grid-cols-2 gap-3">
                    <div className="relative h-[195px] col-span-2 rounded-lg overflow-hidden">
                        <Image
                            className="h-[195px] rounded-lg"
                            src="/static/bilibili/live-banner.png"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="relative h-[105px] rounded-lg overflow-hidden">
                        <Image
                            className="h-[105px] rounded-lg"
                            src="/static/bilibili/live-banner.png"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="relative h-[105px] rounded-lg overflow-hidden">
                        <Image
                            className="h-[105px] rounded-lg"
                            src="/static/bilibili/live-banner.png"
                            fill
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 grow h-full ml-4 rounded-lg">
                    <div className="h-[158px] pt-[16px] px-[20px] bg-white rounded-lg box-border">
                        <div className="flex justify-between items-center mb-4 px-2">
                            <span className="text-gray-900 font-bold text-[16px]">热门分区</span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col items-center">
                                <div className="relative w-[93px] h-[62px] rounded-lg overflow-hidden">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/live-banner.png"
                                        fill
                                        alt=""
                                    />
                                </div>
                                <div className="mt-1">英雄联盟</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative w-[93px] h-[62px] rounded-lg overflow-hidden">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/live-banner.png"
                                        fill
                                        alt=""
                                    />
                                </div>
                                <div className="mt-1">热门帮玩</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative w-[93px] h-[62px] rounded-lg overflow-hidden">
                                    <Image
                                        className="rounded-lg"
                                        src="/static/bilibili/live-banner.png"
                                        fill
                                        alt=""
                                    />
                                </div>
                                <div className="mt-1">视频聊天</div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 bg-white rounded-lg pt-[16px] px-[20px]">
                        <div className="flex justify-between h-[22px]">
                            <div className="flex items-center">
                                <span className="text-[18px] text-blue-500">人气榜</span>
                                <span className="text-[18px] text-gray-700 px-2">大航海</span>
                            </div>
                            <div className="flex items-center text-[14px] text-gray-500">
                                <LuRefreshCcw />
                                <span className="ml-1">刷新</span>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            {Array(4)
                                .fill(0)
                                .map((_, i) => {
                                    return (
                                        <div className="flex justify-between items-center h-[55px] mb-[10px]">
                                            <div className="flex items-center">
                                                <div className="ml-2 mr-1 w-[20px] text-[22px] scale-[1.2] text-blue-500">
                                                    {i + 1}
                                                </div>
                                                <div className="mr-2 w-[55px] h-[55px] bg-gray-500 rounded-full" />
                                                <div className="flex flex-col">
                                                    <span className="text-gray-800 text-[14px]">
                                                        小念困困ouo
                                                    </span>
                                                    <span className="text-gray-500 text-[12px]">
                                                        5人助力中
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-[60px]">
                                                <div className="flex items-center">
                                                    <LiaHotjar className="text-[12px] leading-[12px]" />
                                                    <span className="text-[12px] leading-[12px]">
                                                        14.24万
                                                    </span>
                                                </div>
                                                <div className="flex flex-row-reverse mr-2">
                                                    <FaRankingStar className="" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg px-[20px] pt-[16px]">
                        <div className="flex justify-between items-center mb-4 px-2">
                            <span className="text-gray-900 font-bold text-[16px]">资讯中心</span>
                            <span className="text-gray-500 text-[12px]">更多资讯&gt;</span>
                        </div>
                        <div className="flex flex-col justify-between h-[80px]">
                            <div className="flex justify-between">
                                <span className="w-[236px] line-clamp-1 text-[13px]">
                                    [公告] 《哔哩哔哩直播服务协议》更新公告
                                </span>
                                <span className="text-[12px] text-gray-500">10-24</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="w-[236px] line-clamp-1 text-[13px]">
                                    [公告] 《哔哩哔哩直播服务协议》更新公告
                                </span>
                                <span className="text-[12px] text-gray-500">10-24</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="w-[236px] line-clamp-1 text-[13px]">
                                    [公告] 《哔哩哔哩直播服务协议》更新公告
                                </span>
                                <span className="text-[12px] text-gray-500">10-24</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default App;
