// Define connection and cursor
connection = sqlite3.connect(hotel.db)

// cursor is used to interact with the database
cursor = connection.corsur()

// create store tables 
#USERS

cursor.execute('''

CREATE TABLE IF NOT EXISTS users( //- Tables are where you store your data in rows and columns.

user_id INTEGER PRIMARY KEY AUTOINCREMENT, //- is the column name.

name TEXT, // - name is a column for storing text (like "Zarif"). TEXT is the data type for strings.

email TEXT,

password TEXT

)

''')
