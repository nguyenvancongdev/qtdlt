import db from '@/fb'
import { collection, getDocs, 
         query,limit,doc,addDoc,
         updateDoc,deleteDoc, writeBatch } from 'firebase/firestore/lite';
// addDoc, updateDoc, doc, deleteDoc, query, orderBy, limit, limitToLast
    //get total
const citiesCol = collection(db, 'hello');
const batch = writeBatch(db);
const documentRef = doc(db, 'hello');
//get all
export const getHellos = async () =>{
    let citySnapshot = await getDocs(citiesCol);
    return citySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));   
}
// get limit
export const getHellolimit = async ({page,size}) => {
    let querys = query(citiesCol, limit(size),startAt(page*size) )
    let citySnapshot = await getDocs(querys)
    return citySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));   
}
//them 1 row:
export const create = async (value) => {
    await addDoc(citiesCol, value).then(()=> {this.addvalue = null, this.conso() })
}
//update 1 row:
export const update = async ({id, ...value}) => {
    const userDoc = doc(db, 'hello', id);
    await updateDoc(userDoc, value).then(() => {})
}
// delete
export const deleteRow = async (id) => {
    const userDoc = doc(db, 'hello', id);
    await deleteDoc(userDoc)
}
// mutil

//update nhieu row:
export const updateMutil = async (value) => {
    value.forEach(({id, ...item}) => {
        const documentRef = doc(db, 'hello', id);
        batch.set(documentRef, item )
    }); 
    await batch.commit()
    // await addDoc(citiesCol, value).then(()=> {this.addvalue = null, this.conso() })
}
// creat nhiều row:
export const creatMutil = async (value) => {
    value.forEach((item) => {
        batch.create(citiesCol, item )
    }); 
    await batch.commit()
    // await addDoc(citiesCol, value).then(()=> {this.addvalue = null, this.conso() })
}
// delete nhiều row:
export const deleteMutil = async (value) => {
    value.forEach((id) => {
        const userDoc = doc(db, 'hello', id);
        batch.create(citiesCol, userDoc )
    }); 
    await batch.commit()
    // await addDoc(citiesCol, value).then(()=> {this.addvalue = null, this.conso() })
}

