import choo from 'choo'
import mainView from './views/mainView'
import metaDataStore from './stores/metaDataStore'

const app = choo()

app.use(metaDataStore)
app.route('/', mainView)
app.mount('#root')

export default app
