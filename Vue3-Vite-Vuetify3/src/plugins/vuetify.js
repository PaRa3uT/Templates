import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import { mdi } from 'vuetify/lib/iconsets/mdi-svg'

export default createVuetify({
        icons: {
            defaultSet: 'mdi',
            // aliases,
            sets: {
                mdi,
            },
        }
})
