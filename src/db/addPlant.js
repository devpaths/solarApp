export const addPlant = (plant, setPlants) => {
    if (!plant) {
      alert("Please enter plant details");
      return false;
    }
  
    db.transaction((txn) => {
      txn.executeSql(
        'INSERT INTO Plants (name) VALUES (?)',
        [plant],
        (sqlTxn, res) => {
          console.log("Plant added successfully");
          getPlants(setPlants);
        },
        (error) => {
          console.log("Error adding plant", error.message);
        }
      );
    });
  };