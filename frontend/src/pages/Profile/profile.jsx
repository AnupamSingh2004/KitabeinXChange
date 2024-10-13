function Profile() {

    const imageUrl = 'https://cdn.usegalileo.ai/stability/f1a138c7-f493-4813-901b-a3dd13914446.png';

    return (
        <>

            <header
                className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f2] px-10 py-3 ">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-[#111713]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">KitabeXchange</h2>
                    </div>
                    <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch pl-52 rounded-xl h-full">
                            <div
                                className="text-[#648770] flex border-none bg-[#f0f4f2] items-center justify-center p-5 rounded-l-xl border-r-0"
                                data-icon="MagnifyingGlass"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                     viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="items-center justify-center">
                                <input
                                    placeholder="Search"
                                    className="form-input flex w-[1000px] min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111713] focus:outline-0 focus:ring-0 border-none bg-[#f0f4f2] focus:border-none h-full placeholder:text-[#648770] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                />
                            </div>

                        </div>
                    </label>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a className="text-white text-sm font-medium leading-normal" href="#">Explore</a>
                        <a className="text-whitez text-sm font-medium leading-normal" href="#">Create</a>


                    </div>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"

                    ><img src="https://cdn.usegalileo.ai/stability/73ec6d9f-1ada-4303-a940-498b3fff535c.png" alt=""/>
                    </div>
                </div>
            </header>

            <div className="flex p-4 container">
                <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <div className="flex gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                            style={{backgroundImage: `url(${imageUrl})`}}
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-black text-2xl font-bold leading-tight tracking-[-0.015em]">
                                Sasha Williams
                            </p>
                            <p className="text-gray-500 text-base font-normal leading-normal">@sasha.williams</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-3">
                <div className="flex border-b border-[#dce5df] px-4 gap-8">
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111713] text-[#111713] pb-[13px] pt-4"
                       href="#">
                        <p className="text-[#111713] text-sm font-bold leading-normal tracking-[0.015em]">For Sale</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#648770] pb-[13px] pt-4"
                       href="star2.html">
                        <p className="text-[#648770] text-sm font-bold leading-normal tracking-[0.015em]">For
                            Exchange</p>
                    </a>

                </div>
            </div>


        </>
    )
}

export default Profile