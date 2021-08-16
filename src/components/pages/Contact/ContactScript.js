import { links } from '../../../Details/details';
import ContentTitle from '../../ContentTitle/ContentTitle.vue';
import Icon from './../../Icon/Icon.vue';
export default {
    name: 'ContactPage',
    components: { ContentTitle, Icon },
    setup() {
        return {
            infoDetails: [
                {
                    icon: 'location',
                    title: 'Location',
                    detail: 'Pico Km4, La Trinidad, Benguet, Philippines'
                },
                {
                    icon: 'envelope',
                    title: 'Email',
                    detail: 'kateawisan@gmail.com'
                },
                {
                    icon: 'mobile',
                    title: 'Call',
                    detail: '+639496284352'
                }
            ],
            links: links
        }
    }
};