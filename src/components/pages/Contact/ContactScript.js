import { reactive } from 'vue';
import { links, address, email } from '../../../Details/details';
import ContentTitle from '../../ContentTitle/ContentTitle.vue';
import Icon from './../../Icon/Icon.vue';
import emailjs, { init } from 'emailjs-com';
init('user_zdO7SqNAzUeW1bl8KtMhn');
export default {
    name: 'ContactPage',
    components: { ContentTitle, Icon },
    setup() {

        const form = reactive({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

        const error = reactive({
            alertShow: false,
            alertMessage: '',
            alertType: 'success',
            buttonLoad: false
        });

        function emailVerify(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        const checkFields = () => {
            for (var key of Object.keys(form)) {
                if (form[key] === '') {
                    return false;
                }
            }
            return true;
        }

        const submit = () => {
            error.buttonLoad = true

            if (!checkFields()) {
                error.alertShow = true
                error.alertMessage = 'Their are empty Fields. Please Fill Up all the fields.'
                error.alertType = 'danger'
                error.buttonLoad = false
                return
            }

            if (!emailVerify(form.email)) {
                error.alertShow = true
                error.alertMessage = 'Please enter a valid email address.'
                error.alertType = 'danger'
                error.buttonLoad = false
                return
            }

            emailjs
                .send('service_88wvqn9', 'template_xatr43k', form)
                .then(() => {
                    error.alertShow = true
                    error.alertMessage = 'Email Successfully Sent! 😁'
                    error.alertType = 'success'
                    error.buttonLoad = false
                    form.subject = ""
                    form.name = ""
                    form.email = ""
                    form.message = ""
                })
                .catch(() => {
                    error.alertShow = true
                    error.alertMessage = 'Something Went Wrong and your message was not successfully Sent! 😁'
                    error.alertType = 'danger'
                    error.buttonLoad = false
                });
        }

        return {
            form,
            error,
            infoDetails: [
                {
                    icon: 'location',
                    title: 'Location',
                    detail: address
                },
                {
                    icon: 'envelope',
                    title: 'Email',
                    detail: email
                },
            ],
            links: links,
            submit
        }
    }
};