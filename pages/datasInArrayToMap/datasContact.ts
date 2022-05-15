const datasContact = [
    {
        title: 'Where I live',
        type: '',
        link: {
            label: 'Brazil',
            icon: false,
            to: 'https://www.google.com.br/maps/place/Brazil/@-13.6609706,-69.6698456,4z/data=!3m1!4b1!4m5!3m4!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-14.235004!4d-51.92528'
        }
    },
    {
        title: 'Email',
        type: 'email',
        link: {
            label: 'juan@fasters.com.br',
            icon: false,
            to: 'mailto:juan@fasters.com.br'
        }
    },
    {
        title: 'Call me',
        type: 'phone',
        link: {
            label: '5535992126706',
            icon: false,
            to: 'tel:+5535992126706'
        }
    },
    {
        title: 'Social Profiles',
        type: 'socialMidias',
        link: {
            label: false,
            icon: ['InstagramIcon', 'LinkedInIcon'],
            to: ['intagram', 'linkedin']
        }
    },
]

export { datasContact }