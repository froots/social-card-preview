import choo from 'choo'
import mainView from './views/main'

const app = choo()

app.route('/', mainView)

export default app
