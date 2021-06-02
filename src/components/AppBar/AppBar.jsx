import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedOn = useSelector(authSelectors.getLoggedOn);

  return <header>{isLoggedOn ? <UserNav /> : <AuthNav />}</header>;
}
