import { Navigate } from 'react-router'
import useAuthority from '@/utils/hooks/useAuthority'

const AuthorityGuard = (props) => {
    const { userAuthority = [], authority = [], children } = props

    const roleMatched = useAuthority(userAuthority, authority)

    return <>{roleMatched ? children : <Navigate to="/access-denied" />}</>
}

export default AuthorityGuard
