import {RecoilRoot,useRecoilValue} from "recoil"
import {networkAtom,jobsAtom,notificationAtom,messagingAtom,totalNotificationSelector} from "./atoms"
// import {useMemo} from "react"
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
  const  totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // const totalNotificationCount = useMemo(()=>{
    // return networkNotificationCount+ jobsAtomCount + messagingAtomCount + notificationAtomCount
  // },[networkNotificationCount,jobsAtomCount,messagingAtomCount,notificationAtomCount])

  return<>
<button>Home</button>
<button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
<button>Jobs ({jobsAtomCount})</button>
<button>Messaging ({messagingAtomCount})</button>
<button>Notifications({notificationAtomCount})</button>
 
 <button>Me ({totalNotificationCount})</button>
  </>
}
export default App