<template>
    <div id="experience-content" class="experience-content py-50px min-h-100vh">
        <content-title :title="`EXPERIENCE`" />
        <div class="flex flex-row justify-center pt-30px">
            <div class="flex max-w-1200px gap-50px px-80px <md:px-40px <md:flex-col <md:gap-0">
                <div v-for="(experience, i) in experiences" :key="i">
                    <template v-for="xp in experience" :key="xp.company">
                        <ResumeItem :company="xp.company" :year="xp.year" :jobTitle="xp.jobTitle" :summary="xp.summaries" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContentTitle from './../../../components/ContentTitle/ContentTitle.vue';
import ResumeItem from './../../ResumeItem/ResumeItem.vue';
export default {
    name: 'Experience',
    components: { ResumeItem, ContentTitle },
    setup() {
        return {
            experiences: [
                [
                    {
                        company: `ILEARN SKILLS AND DEVELOPMENT CENTER`,
                        year: `2018 - 2019`,
                        jobTitle: `Junior Graphic Designer Intern`,
                        summaries: [`Other than that. I've helped create/ design posters and brochures`, `I've helped create/ design posters and brochures`],
                    },
                    {
                        company: `SITEL BAGUIO CITY`,
                        year: `2019`,
                        jobTitle: `Customer Service Representative`,
                        summaries: [
                            `As a Customer Service Representative from Macy’s account, I was responsible for managing various customer issues depending on account assignment; transactions can be related to billing and collections support, client inquiries, product support, or inbound sales.`,
                            `I also Interact with customers to handle complaints, process orders and provide information about an organization’s products and services from both composed and irate customers.`,
                        ],
                    },
                ],
                [
                    {
                        company: `LENNY LEMONS (INTERNATIONAL)`,
                        year: `2020 - 2021`,
                        jobTitle: `Social Media Assistant or Associate WFH`,
                        summaries: [
                            `As a Social Media Associate, I’ve helped handle both influencers, brand ambassadors and customer chats from their social media accounts such as Facebook and Instagram.`,
                            `My role also includes data entry, research, reacting, commenting, posting, and assisting inquiries or complaints.`,
                        ],
                    },
                    {
                        company: `FREELANCE`,
                        year: `2021`,
                        jobTitle: `Data Entry`,
                        summaries: [
                            `As a data entry freelancer, I help prepare sources of data for computer entry by compiling and sorting information using Microsoft Excel, Word or Google sheets. Enters customers’ account data by inputting alphabetic and numeric.`,
                            `Verifies entered customer and account data by reviewing, correcting, deleting, or reentering data.`,
                            `My role also includes Data scraping, Data Collection, and Web Research.`
                        ],
                    },
                ],
            ],
        };
    },
};
</script>