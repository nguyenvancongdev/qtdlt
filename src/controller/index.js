
import { collection, getDocs, setDoc, addDoc, doc, updateDoc } from 'firebase/firestore'
import db from '@/fb'

export const getAll = async({table}) => {   
     const citiesCol = collection(db, table);
     const citySnapshot = await getDocs(citiesCol).catch(err => console.log(err, 'warning err firebase'))
     let getdata = citySnapshot.docs.map(item => ({...item.data(), id: item.id})) ;
     console.log(getdata);
     return getdata;
}
export const createNotId = async() => {
     const dbRef = collection(db, 'group')
   await    addDoc(dbRef, {anh: 'em'})
     // .then(() => console.log('thanh cong')).catch((e)=> {console.log(e)})
}

export const createWithId = async() => {

     const dbRef = doc(db, 'group', 'hanh4')
     await setDoc(dbRef, {kkkkottti: 'emkkk6666'}).then(()=> {console.log('hanh')}).catch(err => console.log(err))
     // .then(() => console.log('thanh cong')).catch((e)=> {console.log(e)})
}
 
 

export const updaterow = async() => {
     const dbRef = doc(db, 'group', 'hanh4')
     await updateDo(dbRef)
}     
// const citiesRef = db.collection('cities');

// await citiesRef.doc('SF').set({
//   name: 'San Francisco', state: 'CA', country: 'USA',
//   capital: false, population: 860000,
//   regions: ['west_coast', 'norcal']
// });

// export const updateone = async ({row, id, data}) => {
//     let connects= connect(row)
//     let get_rowid = connects.doc(id)
//   await  get_rowid.set({
//       HANH: data.HANH, 
//       CONG: data.CONG 
//     })
// }

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