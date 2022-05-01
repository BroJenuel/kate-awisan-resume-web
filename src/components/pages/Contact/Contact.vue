<template>
    <div id="contact-page-content" class="py-80px flex justify-center flex-col items-center min-h-[100vh]">
        <ContentTitle title="CONTACT" />
        <div class="flex md:flex-row flex-col max-w-1200px w-[100%] pt-50px gap-30px justify-evenly px-20px">
            <div class="flex flex-col gap-[40px]">
                <div v-for="infoDetail in infoDetails" :key="infoDetail.title" class="flex items-center gap-[10px]">
                    <div class="bg-[#eef7ff] p-[10px] rounded-[50px]">
                        <Icon :name="infoDetail.icon" color="var(--primary-color)" />
                    </div>
                    <div>
                        <h5 class="font-600 text-size-22px opacity-70">{{ infoDetail.title }}:</h5>
                        <p class="opacity-50 mt-10px">{{ infoDetail.detail }}</p>
                    </div>
                </div>
            </div>
            <div class="input-form flex flex-col md:max-w-500px max-w-100% w-[100%] gap-10px">
                <div
                    v-show="error.alertShow"
                    :class="{ 'bg-red-500': error.alertType === 'danger', 'bg-green-600': error.alertType === 'success' }"
                    class="flex items-center bg-red-500 py-20px px-10px rounded-md text-light-50 gap-10px"
                >
                    <div>
                        <Icon v-if="error.alertType === 'danger'" name="danger" color="#fff" />
                        <Icon v-else name="check" color="#fff" />
                    </div>
                    <div>
                        {{ error.alertMessage }}
                    </div>
                </div>
                <div class="flex gap-10px w-[100%]">
                    <div class="w-[100%]">
                        <input
                            v-model="form.name"
                            type="text"
                            class="mt-1 w-100% focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-[0.5rem] px-[.75rem] border-width-1px"
                            placeholder="Your Name"
                        />
                    </div>
                    <div class="w-[100%]">
                        <input
                            v-model="form.email"
                            type="text"
                            class="mt-1 w-100% focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-[0.5rem] px-[.75rem] border-width-1px"
                            placeholder="Email Address"
                        />
                    </div>
                </div>
                <div class="flex flex-col gap-10px">
                    <div>
                        <input
                            v-model="form.subject"
                            type="text"
                            class="mt-1 w-100% focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-[0.5rem] px-[.75rem] border-width-1px"
                            placeholder="Subject"
                        />
                    </div>
                    <div>
                        <textarea
                            v-model="form.message"
                            type="text"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-[0.5rem] px-[.75rem] border-width-1px"
                            placeholder="Type Your Message Here"
                            rows="7"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        :disabled="error.buttonLoad ? 'disabled' : false"
                        @click="submit()"
                    >
                        {{ error.buttonLoad === true ? 'Loading' : 'Send' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="py-50px text-center bg-[#f7f8f9]">
        <h1 class="text-size-36px font-700">Kate Awisan</h1>
        <ul class="flex gap-[15px] justify-center pb-40px pt-20px">
            <li v-for="link in links" :key="link.icon">
                <a target="_blank" :href="link.link">
                    <div class="bg-[var(--primary-color)] p-7px rounded-50px cursor-pointer hover:bg-blue-400 duration-300">
                        <Icon :name="link.icon" :color="`#fff`" />
                    </div>
                </a>
            </li>
        </ul>
        <p><b>Kate Awisan</b> © Copyright. All Rights Reserved</p>
        <small>Created By <a class="cursor-pointer underline" target="_blank" href="https://jenuelganawed.com">Jenuel Ganawed</a></small>
    </div>
</template>
<script src="./ContactScript.js" />
<style lang="scss">
.input-form {
    input,
    textarea {
        &:focus-visible {
            outline: none !important;
        }
    }
}
</style>
