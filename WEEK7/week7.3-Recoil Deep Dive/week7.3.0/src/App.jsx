import {RecoilRoot,useRecoilValue,useSetRecoilState} from "recoil"
import {networkAtom,jobsAtom,notificationAtom,messagingAtom} from "./atoms"
const App = () => {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount =useRecoilValue(messagingAtom)

  return<>
<button>Home</button>
<button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
<button>Jobs ({jobsAtomCount})</button>
<button>Messaging ({messagingAtomCount})</button>
<button>Notifications({notificationAtomCount})</button>
 <ButtonUpdater />
  </>
}

function ButtonUpdater(){
  const messagingAtomCount = useSetRecoilState(messagingAtom)
  return <button onClick ={()=>{
    setMessageingAtomCount(c=>c+1);
  }}>
    Me
  </button>
}
export default App