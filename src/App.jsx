import { BrowserRouter } from 'react-router'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import CustomerLocationPage from './views/Insights/CustomerLocation'
import appConfig from './configs/app.config'
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <CustomerLocationPage />
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
