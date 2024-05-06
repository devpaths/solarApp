import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
  name: "rn_sqlite",
});

export const createTables = () => {
  db.transaction((txn) => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Plants (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
      [],
      (sqlTxn, res) => {
        console.log("Table created!");
      },
      (error) => {
        console.log("Error in table creation", error.message);
      }
    );
  });
};

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

export const deleteUser=id=>{
   
  db.transaction(txn => {
    txn.executeSql('DELETE FROM Plants where id=?',[id],
    (sqlTxn,res)=>{
      getPlants();
    },
  );
  });

} 