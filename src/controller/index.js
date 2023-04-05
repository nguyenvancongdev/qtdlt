const connect = (row) => (db.collection(row))
module.exports.getAll = ({row, id, data}) => {
    let connects = connect(row)
    let getalldata = await connects.get()
    return getalldata
}
module.exports.updateone = ({row, id, data}) => {
    let connects= connect(row)
    let get_rowid = connects.doc(id)
  await  get_rowid.set({
      HANH: data.HANH, 
      CONG: data.CONG 
    })
}
module.exports.create = ({row,data}) => {
    let connects= connect(row)
    // tạo uiud
    let id = ramdom()
    let get_rowid = connects.doc(id)
    await  get_rowid.set({
      HANH: data.HANH, 
      CONG: data.CONG 
    })
}
module.exports.count = ({row}) => {
    let connects= connect(row)
    let counts = connects(row).count()
    let getcounts = await counts.get()
    return getcounts
}
module.exports.deleteid = ({row, id}) => {
    let connects= connect(row)
    let get_rowid = connects(row).doc(id)
    await get_rowid.delete()
}

module.exports.insertData = () => {
    let insets = [1,3,4,5,6]
  const batch = fs.batch();
  let connects= connect(row)
  insets.map(item => {
     const ref = connects.doc();
      batch.set(ref, inst);
  })

  await batch.commit();
}