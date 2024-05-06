
export const getPlants = (setPlants) => {
    db.transaction((txn) => {
      txn.executeSql(
        'SELECT * FROM Plants ORDER BY id ASC',
        [],
        (sqlTxn, res) => {
          console.log("Plants retrieved successfully");
          let len = res.rows.length;
          let results = [];
  
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({ id: item.id, name: item.name });
          }
  
          setPlants(results);
        },
        (error) => {
          console.log("Error retrieving plants", error.message);
        }
      );
    });
  };
  