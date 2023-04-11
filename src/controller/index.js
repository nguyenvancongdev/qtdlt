
import { collection, getDocs } from 'firebase/firestore'
import db from '@/fb'

export const getAll = async() => {   
     const citiesCol = collection(db, 'group');
     const citySnapshot = await getDocs(citiesCol);
     console.log(citySnapshot)
     return citySnapshot
}

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