import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDt1ejlNDOhQn4CY-vD4H0yHlVExhsS3JA",
  authDomain: "qtdlt-quytindung.firebaseapp.com",
  projectId: "qtdlt-quytindung",
  storageBucket: "qtdlt-quytindung.appspot.com",
  messagingSenderId: "605211877327",
  appId: "1:605211877327:web:d19b692b27236644617cba",
  measurementId: "G-JD483J7V1P"
  };
  const firebase = initializeApp(firebaseConfig)

  const db = getFirestore(firebase);

// const connect = (row) => (db.collection(row))
const getAll =  () => {
    // let connects = connect('group')
    // let getalldata = await connects.get()
    // return getalldata
   return db
}
module.exports.getAll = getAll
// module.exports.updateone = async ({row, id, data}) => {
//     let connects= connect(row)
//     let get_rowid = connects.doc(id)
//   await  get_rowid.set({
//       HANH: data.HANH, 
//       CONG: data.CONG 
//     })
// }
// module.exports.create = async ({row,data}) => {
//     let connects= connect(row)
//     // tạo uiud
//     let id = 1
//     let get_rowid = connects.doc(id)
//     await  get_rowid.set({
//       HANH: data.HANH, 
//       CONG: data.CONG 
//     })
// }
// module.exports.count = async ({row}) => {
//     let connects= connect(row)
//     let counts = connects(row).count()
//     let getcounts = await counts.get()
//     return getcounts
// }
// module.exports.deleteid = async ({row, id}) => {
//     let connects= connect(row)
//     let get_rowid = connects(row).doc(id)
//     await get_rowid.delete()
// }

// module.exports.insertData = async (row) => {
//     let insets = [1,3,4,5,6]
//   const batch = db.batch();
//   let connects= connect(row)
//   insets.map(item => {
//      const ref = connects.doc();
//       batch.set(ref, item);
//   })
//   await batch.commit();
// }