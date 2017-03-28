import choo from 'choo'
import mainView from './views/mainView'
import globalEmitter from './lib/globalEmitter'
import metaDataStore from './stores/metaDataStore'

const app = choo()

app.use(globalEmitter)
app.use(metaDataStore)
app.route('/', mainView)

export default app
