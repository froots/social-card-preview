import choo from 'choo'
import mainView from './views/mainView'
import globalInit from './lib/globalInit'
import metaDataStore from './stores/metaDataStore'

const rootUrl = window.location.pathname
const app = choo()

app.use(globalInit)
app.use(metaDataStore)
app.route(rootUrl, mainView)

export default app
