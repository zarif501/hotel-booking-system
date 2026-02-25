import sqlite3

def create_tables():
    hotel_data = sqlite3.connect('hotel.db')
    cursor = hotel_data.cursor()

    # USERS
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
    )
    ''')

    # ROOMS
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS rooms(
        room_id INTEGER PRIMARY KEY AUTOINCREMENT,
        room_number TEXT,
        price REAL
    )
    ''')

    # BOOKINGS
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS bookings(
        booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        room_id INTEGER,
        check_in TEXT,
        check_out TEXT,
        total_price REAL,
        status TEXT DEFAULT 'confirmed'
    )
    ''')

    conn.commit()
    conn.close()