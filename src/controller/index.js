connect = (row) => (db.collection(row))
module.exports.getAll = ({row, id, data}) => {
    let connect = connect(row)
    let data = await connect.
}