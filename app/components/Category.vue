<template>
    <div>
        <div
            style="background-image: url('/category-bg.jpg')"
            class="h-[680px] bg-cover bg-no-repeat bg-top bg-fixed"
        >
            <div class="grid grid-flow-row lg:py-16 px-8 py-8 container mx-auto">
                <div class="flex flex-col items-center">
                    <h2
                        class="lg:text-3xl text-xl font-bold uppercase tracking-wider"
                    >Product Category</h2>

                    <img src="/bt-i.png" class="mt-4" />
                </div>

                <div>
                    <div
                        class="grid lg:grid-flow-col lg:grid-cols-4 grid-cols-2 gap-4 lg:mt-16 mt-6"
                    >
                        <div
                            style="background-image: url('/receipt-printer.jpg')"
                            class="col-span-1 lg:h-[400px] h-60 bg-cover bg-no-repeat bg-center hover:grayscale-0 grayscale"
                        >
                            <h2
                                class="text-white font-bold uppercase p-2 text-lg tracking-wider"
                            >Receipt Printer</h2>
                        </div>

                        <div
                            style="background-image: url('/mobile-printer.jpg')"
                            class="col-span-1 lg:h-[400px] h-60 bg-cover bg-no-repeat bg-center hover:grayscale-0 grayscale"
                        >
                            <h2
                                class="text-white font-bold uppercase p-2 text-lg tracking-wider hover:brightness-100"
                            >Mobile Printer</h2>
                        </div>

                        <div
                            style="background-image: url('/lable-printer.jpg')"
                            class="col-span-1 lg:h-[400px] h-60 bg-cover bg-no-repeat bg-center hover:grayscale-0 grayscale"
                        >
                            <h2
                                class="text-white font-bold uppercase p-2 text-lg tracking-wider"
                            >Label Printer</h2>
                        </div>

                        <div
                            style="background-image: url('/cash-drawer.jpg')"
                            class="col-span-1 lg:h-[400px] h-60 bg-cover bg-no-repeat bg-center hover:grayscale-0 grayscale"
                        >
                            <h2
                                class="text-white font-bold uppercase p-2 text-lg tracking-wider"
                            >Cash Drawer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>