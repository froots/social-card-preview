import choo from 'choo'
import mainView from './views/mainView'
import globalInit from './lib/globalInit'
import metaDataStore from './stores/metaDataStore'

const app = choo()

app.use(globalInit)
app.use(metaDataStore)
app.route('/', mainView)

export default app
