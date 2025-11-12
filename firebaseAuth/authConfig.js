import initializeApp from "firebase/app"
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey : import.meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain : import.meta.env.REACT_APP_AUTH_DOMAIN,
    projectId : import.meta.env.REACT_APP_FIREBASE_PROJECT_ID
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(auth)


export { auth, db }